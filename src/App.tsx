import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'motion/react';
import { graphData, Node, Link } from './data';
import { 
  Info, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Search, 
  Sparkles, 
  X, 
  Layers, 
  ChevronRight,
  Hexagon,
  BookOpen,
  Anchor,
  Activity,
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SimulationNode extends d3.SimulationNodeDatum, Node {}
interface SimulationLink extends d3.SimulationLinkDatum<SimulationNode> {
  type: Link['type'];
  description: string;
}

interface NodeMetrics {
  degree: number;
  centrality: number;
  neighborCount: number;
  clusterShare: number;
}

export default function App() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [selectedLink, setSelectedLink] = useState<SimulationLink | null>(null);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLegendOpen, setIsLegendOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Use refs for nodes and links to keep them stable across renders while simulation is running
  const nodes: SimulationNode[] = useMemo(() => graphData.nodes.map(n => ({ ...n })), []);
  const links: SimulationLink[] = useMemo(() => graphData.links.map(l => ({
    ...l,
    source: l.source,
    target: l.target
  })), []);

  // Quantitative NetworkX-style Metrics
  const nodeMetrics = useMemo(() => {
    const metricsMap: Record<string, NodeMetrics> = {};
    const totalNodes = nodes.length;

    nodes.forEach(node => {
      const connectedLinks = links.filter(l => 
        (typeof l.source === 'string' ? l.source === node.id : (l.source as any).id === node.id) || 
        (typeof l.target === 'string' ? l.target === node.id : (l.target as any).id === node.id)
      );
      
      const neighbors = new Set(connectedLinks.map(l => {
        const sId = typeof l.source === 'string' ? l.source : (l.source as any).id;
        const tId = typeof l.target === 'string' ? l.target : (l.target as any).id;
        return sId === node.id ? tId : sId;
      }));

      const clusterNodes = nodes.filter(n => n.cluster === node.cluster).length;

      metricsMap[node.id] = {
        degree: connectedLinks.length,
        centrality: connectedLinks.length / (totalNodes - 1),
        neighborCount: neighbors.size,
        clusterShare: clusterNodes / totalNodes
      };
    });
    return metricsMap;
  }, [nodes, links]);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    const observer = new ResizeObserver(updateDimensions);
    if (containerRef.current) observer.observe(containerRef.current);
    updateDimensions();
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const defs = svg.append('defs');
    
    // Cluster Color Scale
    const clusters = Array.from(new Set(nodes.map(n => n.cluster)));
    const colorScale = d3.scaleOrdinal<string>()
      .domain(clusters)
      .range(['#ef4444', '#3b82f6', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16', '#6366f1', '#f97316']);

    // Node Glow Filters
    const filter = defs.append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
    filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'blur');
    filter.append('feComposite').attr('in', 'SourceGraphic').attr('in2', 'blur').attr('operator', 'over');

    const g = svg.append('g');

    // Zoom setup
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    zoomRef.current = zoom;
    svg.call(zoom);

    const simulation = d3.forceSimulation<SimulationNode>(nodes)
      .force('link', d3.forceLink<SimulationNode, SimulationLink>(links)
        .id(d => d.id)
        .distance(100)
      )
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(dimensions.width / 2, dimensions.height / 2))
      .force('collision', d3.forceCollide().radius(60))
      .alphaDecay(0.015);

    // Links
    const link = g.append('g')
      .selectAll('path')
      .data(links)
      .enter().append('path')
      .attr('fill', 'none')
      .attr('stroke', d => {
        switch(d.type) {
          case 'family': return '#f87171'; 
          case 'cameo': return '#60a5fa';
          case 'easter_egg': return '#fbbf24';
          case 'magic': return '#34d399';
          case 'theory': return '#a78bfa';
          case 'hidden_mickey': return 'rgba(255,255,255,0.15)';
          default: return 'rgba(255,255,255,0.2)';
        }
      })
      .attr('stroke-width', d => d.type === 'hidden_mickey' ? 1 : 2.5)
      .attr('stroke-opacity', 0.6)
      .attr('stroke-dasharray', d => d.type === 'theory' ? '4,4' : '0')
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        event.stopPropagation();
        setSelectedLink(d);
        setSelectedNode(null);
      });

    // Nodes
    const node = g.append('g')
      .selectAll('.node')
      .data(nodes)
      .enter().append('g')
      .attr('class', 'node-group')
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        event.stopPropagation();
        setSelectedNode(d);
        setSelectedLink(null);
      })
      .on('mouseover', (event, d) => setHoveredNode(d))
      .on('mouseout', () => setHoveredNode(null))
      .call(d3.drag<SVGGElement, SimulationNode>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended) as any);

    // Node Visuals
    node.append('circle')
      .attr('r', d => d.type === 'ego' ? 40 : d.type === 'theory' ? 25 : 20)
      .attr('fill', d => d.type === 'ego' ? '#fbbf24' : '#0f172a')
      .attr('stroke', d => colorScale(d.cluster))
      .attr('stroke-width', d => d.type === 'ego' ? 5 : 3)
      .style('filter', 'url(#glow)');

    // Inner icon/text
    node.append('text')
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('font-weight', '900')
      .attr('fill', d => d.type === 'ego' ? '#000' : '#fff')
      .attr('class', 'pointer-events-none select-none')
      .text(d => d.name.substring(0, 2).toUpperCase());

    // External Label
    node.append('text')
      .attr('dy', 40)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Inter, sans-serif')
      .attr('font-size', '12px')
      .attr('font-weight', '700')
      .attr('fill', '#f1f5f9')
      .attr('class', 'pointer-events-none select-none drop-shadow-sm')
      .text(d => d.name);

    simulation.on('tick', () => {
      // Curved links
      link.attr('d', d => {
        const source = d.source as SimulationNode;
        const target = d.target as SimulationNode;
        const dx = target.x! - source.x!;
        const dy = target.y! - source.y!;
        const dr = Math.sqrt(dx * dx + dy * dy);
        // Slightly curved arc
        return `M${source.x},${source.y}A${dr * 1.5},${dr * 1.5} 0 0,1 ${target.x},${target.y}`;
      });

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Initial center and zoom
    svg.call(zoom.transform, d3.zoomIdentity.translate(dimensions.width/2.2, dimensions.height/2.2).scale(0.45));

  }, [dimensions, nodes, links]);

  const handleZoomIn = () => zoomRef.current && d3.select(svgRef.current).transition().call(zoomRef.current.scaleBy as any, 1.3);
  const handleZoomOut = () => zoomRef.current && d3.select(svgRef.current).transition().call(zoomRef.current.scaleBy as any, 0.7);
  const handleReset = () => zoomRef.current && d3.select(svgRef.current).transition().call(zoomRef.current.transform as any, d3.zoomIdentity.translate(dimensions.width/2.2, dimensions.height/2.2).scale(0.45));

  return (
    <div className="relative w-full h-screen bg-[#020204] text-slate-100 overflow-hidden font-sans" ref={containerRef}>
      {/* Recipe 7: Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[800px] h-[800px] rounded-full bg-blue-900/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] rounded-full bg-purple-900/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <header className="absolute top-0 left-0 w-full p-8 z-10 flex justify-between items-start pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-auto"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tighter uppercase italic bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                Disney <span className="text-amber-500">Universe</span>
              </h1>
              <p className="text-[9px] font-mono font-bold tracking-[0.5em] text-slate-500 uppercase flex items-center gap-2 pl-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                Međugalaktički_Čvor_Veze // 2024.v5
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-amber-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Pretraži entitete..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-full pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-amber-500/50 transition-all w-48 focus:w-72 shadow-2xl"
            />
          </div>
          <button 
            onClick={() => setIsLegendOpen(!isLegendOpen)}
            className={cn(
              "bg-slate-900/40 backdrop-blur-xl border p-2.5 rounded-full transition-all shadow-xl hover:scale-110",
              isLegendOpen ? "border-amber-500/50 text-amber-500" : "border-white/5 text-slate-400"
            )}
            title="Legenda"
          >
            <Layers className="w-5 h-5" />
          </button>
        </div>
      </header>

      <svg 
        ref={svgRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-1000"
        style={{ opacity: dimensions.width > 0 ? 1 : 0 }}
        onClick={() => { setSelectedNode(null); setSelectedLink(null); }}
      />

      {/* Legend */}
      <AnimatePresence>
        {isLegendOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="absolute bottom-10 left-10 p-6 bg-[#0c0c14]/90 backdrop-blur-3xl border border-white/5 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20 w-72"
          >
            <h3 className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2 border-b border-white/5 pb-2">
              <BookOpen className="w-3 h-3" /> Vizualni_Rječnik
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Obitelj', color: 'bg-red-400' },
                { label: 'Gostovanje (Cameo)', color: 'bg-blue-400' },
                { label: 'Easter Egg', color: 'bg-amber-400' },
                { label: 'Magični Izvor', color: 'bg-emerald-400' },
                { label: 'Teorija Fanova', color: 'bg-purple-400', dashed: true },
                { label: 'Skriveni Mickey', color: 'bg-slate-700' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className={cn(
                    "w-10 h-1 rounded-full transition-all group-hover:scale-110",
                    item.color,
                    item.dashed && "border-t-2 border-dashed bg-transparent border-purple-400 h-0"
                  )} />
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-white transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-4 h-4 rounded-full bg-[#fbbf24] shadow-[0_0_10px_#fbbf24]" />
                <span className="text-[11px] font-bold text-slate-300">EGO Čvor (Centar)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full border border-slate-500" />
                <span className="text-[11px] font-bold text-slate-300">Standardni Entitet</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Sidebar */}
      <AnimatePresence>
        {(selectedNode || selectedLink) && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className="absolute top-0 right-0 h-full w-[450px] bg-[#08080c]/95 backdrop-blur-3xl border-l border-white/5 z-40 flex flex-col p-10 overflow-hidden shadow-[-20px_0_60px_rgba(0,0,0,0.8)]"
          >
            <button 
              onClick={() => { setSelectedNode(null); setSelectedLink(null); }}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-slate-500 hover:text-white transition-all group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>

            {selectedNode && (
              <div className="flex-1 flex flex-col space-y-10 py-6 overflow-y-auto no-scrollbar">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-black py-1.5 px-3 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-md">
                      ID_{selectedNode.id.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-1.5 py-1 px-2.5 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                      <Globe className="w-3 h-3" />
                      <span className="text-[10px] font-mono font-black uppercase tracking-widest">{selectedNode.cluster}</span>
                    </div>
                  </div>
                  <h2 className="text-6xl font-black leading-none tracking-tighter uppercase italic bg-gradient-to-br from-white via-white to-slate-600 bg-clip-text text-transparent">
                    {selectedNode.name}
                  </h2>
                  <div className="inline-flex items-center gap-2 text-amber-400/80 font-mono text-xs font-bold uppercase tracking-widest border border-amber-500/20 bg-amber-500/5 px-3 py-1.5 rounded-full">
                    <Anchor className="w-3.5 h-3.5" /> IZVOR: {selectedNode.movie}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-[0.3em] flex items-center gap-3">
                    <Activity className="w-3 h-3" /> Analiza_Dosjea
                  </h4>
                  <p className="text-lg text-slate-200 leading-relaxed font-medium italic border-l-2 border-amber-500/30 pl-4">
                    {selectedNode.description}
                  </p>
                </div>

                {/* NetworkX Quantitative Metrics Section */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-[0.3em] flex items-center gap-3 border-b border-white/5 pb-2">
                    <Maximize2 className="w-3 h-3" /> Kvantitativna_Analiza (NetworkX)
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Stupanj (Degree)', value: nodeMetrics[selectedNode.id].degree, unit: 'veza', sub: 'Ukupan broj konekcija' },
                      { label: 'Centralnost', value: (nodeMetrics[selectedNode.id].centrality * 100).toFixed(1), unit: '%', sub: 'Utjecaj u cijeloj mreži' },
                      { label: 'Susjedi', value: nodeMetrics[selectedNode.id].neighborCount, unit: 'čvorova', sub: 'Jedinstveni entiteti' },
                      { label: 'Udio Klastera', value: (nodeMetrics[selectedNode.id].clusterShare * 100).toFixed(1), unit: '%', sub: 'Veličina skupine' },
                    ].map((m, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col justify-between">
                         <div>
                           <p className="text-[8px] font-mono font-bold text-slate-500 uppercase">{m.label}</p>
                           <p className="text-[7px] font-mono text-slate-600 leading-none mb-1">{m.sub}</p>
                         </div>
                         <div className="flex items-baseline gap-1 mt-2">
                           <span className="text-xl font-black text-white leading-none">{m.value}</span>
                           <span className="text-[9px] font-bold text-amber-500/60 uppercase">{m.unit}</span>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-mono font-black text-slate-600 uppercase tracking-[0.3em] flex items-center justify-between border-b border-white/5 pb-2">
                    <span>Relacijska_Mreža</span>
                    <span className="text-amber-500/50">PRONAĐENO_VEZA_{graphData.links.filter(l => l.source === selectedNode.id || l.target === selectedNode.id).length}</span>
                  </h4>
                  
                  <div className="space-y-4">
                    {graphData.links
                      .filter(l => l.source === selectedNode.id || l.target === selectedNode.id)
                      .map((link, idx) => {
                        const otherId = link.source === selectedNode.id ? link.target : link.source;
                        const otherNode = graphData.nodes.find(n => n.id === otherId);
                        return (
                          <div 
                            key={idx} 
                            className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-blue-500/30 transition-all cursor-pointer group"
                            onClick={() => setSelectedNode(otherNode || null)}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-black italic text-white group-hover:text-blue-400 transition-colors">
                                {otherNode?.name}
                              </span>
                              <div className="h-px flex-1 bg-white/5" />
                              <span className="text-[9px] px-2 py-0.5 rounded bg-slate-800 text-slate-500 font-mono group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all">
                                {link.type.toUpperCase()}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 leading-snug">
                              {link.description}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="space-y-0.5">
                    <h5 className="text-[9px] font-mono font-black text-slate-500 uppercase flex items-center gap-2">
                       <Shield className="w-3 h-3 text-slate-600" /> Klasifikacija
                    </h5>
                    <p className="text-sm font-black text-white">{selectedNode.type === 'character' ? 'LIK' : selectedNode.type === 'theory' ? 'TEORIJA' : selectedNode.type === 'location' ? 'LOKACIJA' : selectedNode.type === 'object' ? 'PREDMET' : 'EGO'}</p>
                  </div>
                  <div className="space-y-0.5">
                    <h5 className="text-[9px] font-mono font-black text-slate-500 uppercase flex items-center gap-2">
                       <Zap className="w-3 h-3 text-slate-600" /> Izvor_Moći
                    </h5>
                    <p className="text-sm font-black text-white">Disney Magija</p>
                  </div>
                </div>
              </div>
            )}

            {selectedLink && (
              <div className="flex-1 flex flex-col space-y-12 py-10">
                <div className="space-y-4 text-center">
                  <span className="text-[10px] font-mono font-black py-1.5 px-4 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full inline-block">
                    VEZA_USPOSTAVLJENA
                  </span>
                  <h2 className="text-5xl font-black leading-none uppercase italic tracking-tighter">Analiza Vektora</h2>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center justify-between gap-6 px-4">
                    <div className="flex-1 text-right">
                      <p className="text-[10px] font-mono text-slate-500 mb-1">ČVOR_ALFA</p>
                      <p className="text-2xl font-black italic">{(selectedLink.source as SimulationNode).name}</p>
                    </div>
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full border border-purple-500/30 flex items-center justify-center bg-purple-500/5">
                        <ChevronRight className="w-6 h-6 text-purple-500 animate-bounce-x" />
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-purple-500/10 blur-2xl rounded-full" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-mono text-slate-500 mb-1">ČVOR_BETA</p>
                      <p className="text-2xl font-black italic">{(selectedLink.target as SimulationNode).name}</p>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 border border-purple-500/20 p-8 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500 group-hover:w-2 transition-all" />
                    <p className="text-slate-200 text-xl font-medium leading-relaxed italic relative z-10">
                      "{selectedLink.description}"
                    </p>
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Hexagon className="w-24 h-24 rotate-12" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center text-[8px] font-mono font-black text-slate-600 tracking-[0.4em] uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-green-500 rounded-full animate-ping" />
                Prijenos_Uživo_Aktivan
              </span>
              <span>Vlastiti_Stroj_Teorija_v1.2</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Info Overlay (Hover) */}
      <AnimatePresence>
        {hoveredNode && !selectedNode && !selectedLink && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-24 right-10 pointer-events-none z-30 flex items-center gap-6 bg-slate-900/90 backdrop-blur-2xl border border-white/10 px-8 py-5 rounded-2xl shadow-2xl border-l-[6px] border-l-amber-500"
          >
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-black text-amber-500 leading-none mb-2 uppercase tracking-widest">{hoveredNode.movie}</span>
              <span className="text-3xl font-black italic uppercase leading-none tracking-tighter">{hoveredNode.name}</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <Hexagon className="w-8 h-8 text-white/10 fill-white/5 animate-spin-slow" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls Container */}
      <div className="absolute bottom-10 right-10 flex flex-col gap-3 z-30">
        <div className="flex flex-col bg-slate-900/60 backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl shadow-2xl gap-1">
          <button 
            onClick={handleZoomIn}
            className="p-3 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all active:scale-90" 
            title="Povećaj"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button 
            onClick={handleZoomOut}
            className="p-3 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all active:scale-90" 
            title="Smanji"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <div className="h-px bg-white/5 mx-2" />
          <button 
            onClick={handleReset}
            className="p-3 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-all active:scale-90" 
            title="Početni prikaz"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Global CSS for custom animations / styles */}
      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
