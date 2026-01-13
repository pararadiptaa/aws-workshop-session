import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, Server, Database, Layers, Globe, Box, Shield, 
  Cpu, HardDrive, Network, Zap, Wifi, ArrowRight, Check,
  Home, Building, User, Lock, Key, CreditCard, Users, 
  DollarSign, Play, Square, Minus, Plus, Clock, MousePointer,
  PlayCircle, PauseCircle, Hammer, Wrench, Calendar, Maximize,
  Briefcase, ShoppingBag, Truck, Utensils, LayoutGrid,
  Car, Ticket, FileText, Warehouse, Bus, Laptop, Folder, Package, FileJson,
  Store, MapPin, DoorOpen, UserCheck, Smartphone, Factory, Plane,
  Search, ShieldCheck, Mail, RefreshCw, Star
} from 'lucide-react';

// --- SLIDE 1: INTRO ---
export const Intro = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.5, 1, 0.5] 
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-96 h-96 bg-accent/20 blur-[100px] rounded-full"
    />
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="z-10 flex flex-col items-center gap-6"
    >
      <Cloud size={120} className="text-primary" strokeWidth={1} />
      <div className="flex gap-4">
        {['Compute', 'Storage', 'Database', 'Network'].map((item, i) => (
          <motion.span 
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + (i * 0.2) }}
            className="text-depth text-sm uppercase tracking-widest"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </div>
);

// --- SLIDE 2: DEFINITION ---
export const CloudDefinition = () => {
  const [view, setView] = useState<'tech' | 'analogy'>('tech');

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 w-full max-w-4xl h-full justify-center">
        {/* Toggle */}
        <div className="flex bg-secondaryDepth/30 p-1 rounded-lg shrink-0">
            <button 
                onClick={() => setView('tech')}
                className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-bold transition-all ${view === 'tech' ? 'bg-primary text-black' : 'text-depth hover:text-white'}`}
            >
                Technical View
            </button>
            <button 
                onClick={() => setView('analogy')}
                className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-bold transition-all ${view === 'analogy' ? 'bg-primary text-black' : 'text-depth hover:text-white'}`}
            >
                Analogy View
            </button>
        </div>

        <div className="flex-1 w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
                {view === 'tech' ? (
                    <motion.div 
                        key="tech"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex items-center gap-8 md:gap-16"
                    >
                         <div className="flex flex-col items-center gap-4">
                             <div className="w-20 h-20 md:w-24 md:h-24 bg-secondaryDepth/20 rounded-xl flex items-center justify-center border border-depth">
                                 <Users size={32} className="text-primary md:hidden" />
                                 <Users size={40} className="text-primary hidden md:block" />
                             </div>
                             <p className="font-bold">You</p>
                         </div>
                         
                         <div className="flex flex-col items-center gap-2">
                             <motion.div 
                                animate={{ x: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                             >
                                 <ArrowRight size={32} className="text-accent" />
                             </motion.div>
                             <div className="flex items-center gap-2 text-xs text-accent uppercase font-bold tracking-widest">
                                 <Globe size={12} /> Internet
                             </div>
                         </div>

                         <div className="flex flex-col items-center gap-4">
                             <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-xl flex items-center justify-center border border-accent">
                                 <Server size={32} className="text-accent md:hidden" />
                                 <Server size={40} className="text-accent hidden md:block" />
                             </div>
                             <p className="font-bold text-accent">IT Systems</p>
                         </div>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="analogy"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col gap-8 w-full max-w-2xl"
                    >
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                             <div className="p-4 md:p-6 rounded-xl border border-dashed border-depth bg-secondaryDepth/10 opacity-50 flex flex-col items-center text-center gap-2 md:gap-4">
                                 <span className="text-xs uppercase text-depth font-bold">Ownership</span>
                                 <Home size={40} className="text-depth" />
                                 <div>
                                    <p className="font-bold text-primary text-sm md:text-base">Building a House</p>
                                    <p className="text-xs text-depth mt-2 hidden md:block">Buy land, buy bricks, handle repairs.<br/>You do everything.</p>
                                 </div>
                             </div>

                             <div className="p-4 md:p-6 rounded-xl border border-accent bg-accent/10 flex flex-col items-center text-center gap-2 md:gap-4 shadow-[0_0_30px_rgba(151,2,234,0.1)]">
                                 <span className="text-xs uppercase text-accent font-bold">Cloud Computing</span>
                                 <Building size={40} className="text-accent" />
                                 <div>
                                    <p className="font-bold text-white text-sm md:text-base">Staying in a Hotel</p>
                                    <p className="text-xs text-primary/80 mt-2 hidden md:block">Building & maintenance provided.<br/>Just check in and use.</p>
                                 </div>
                             </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        <p className="text-center text-primary/70 max-w-xl text-xs md:text-sm italic shrink-0">
            {view === 'tech' 
                ? "“Using computers over the internet, instead of owning them.”"
                : "“Owning IT is like building a house. Cloud is like staying in a hotel.”"}
        </p>
    </div>
  );
};

// --- SLIDE 3: SCALABILITY & CHARACTERISTICS ---
export const Scalability = () => {
    const [activeTab, setActiveTab] = useState<'demand' | 'scale' | 'pay'>('demand');

    const tabs = [
        { id: 'demand', label: 'On-Demand', icon: Zap },
        { id: 'scale', label: 'Scalable', icon: Layers },
        { id: 'pay', label: 'Pay-As-You-Go', icon: CreditCard },
    ];

    return (
        <div className="flex flex-col h-full w-full max-w-4xl gap-6 items-center">
            {/* Tabs */}
            <div className="flex gap-4 justify-center">
                {tabs.map((t) => (
                    <button 
                        key={t.id}
                        onClick={() => setActiveTab(t.id as any)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border ${
                            activeTab === t.id 
                            ? 'bg-accent border-accent text-white shadow-lg shadow-accent/25' 
                            : 'bg-secondaryDepth/10 border-secondaryDepth text-depth hover:text-primary hover:border-primary'
                        }`}
                    >
                        <t.icon size={16} /> 
                        <span className="text-sm font-bold">{t.label}</span>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 w-full bg-secondaryDepth/10 rounded-2xl border border-secondaryDepth/50 overflow-hidden flex flex-col items-center justify-center p-8 min-h-[300px] relative">
                 <AnimatePresence mode="wait">
                    {activeTab === 'demand' && <OnDemandVisual key="demand" />}
                    {activeTab === 'scale' && <ScalableVisual key="scale" />}
                    {activeTab === 'pay' && <PayVisual key="pay" />}
                 </AnimatePresence>
            </div>
            
            {/* Explanation Footer */}
            <motion.p 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-primary/80 italic max-w-2xl mx-auto h-12"
            >
                {activeTab === 'demand' && "“Building a house takes months. A hotel is ready anytime. Cloud is instant.”"}
                {activeTab === 'scale' && "“More guests? Book more rooms. Guests leave? Return the rooms instantly.”"}
                {activeTab === 'pay' && "“You only pay for the nights you stay. Check out, and the bill stops.”"}
            </motion.p>
        </div>
    )
}

const OnDemandVisual = () => {
    const [booked, setBooked] = useState(false);
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center gap-8 w-full"
        >
            <div className="flex items-center justify-center gap-12 w-full">
                 {/* House */}
                 <div className="flex flex-col items-center gap-3 opacity-30 blur-[1px]">
                    <div className="w-24 h-24 border-2 border-depth border-dashed rounded-xl flex items-center justify-center">
                        <Home size={40} className="text-depth" />
                    </div>
                    <span className="text-xs text-center font-mono">Building...<br/>(Wait Months)</span>
                 </div>

                 <ArrowRight className="text-depth" />

                 {/* Hotel */}
                 <div className="flex flex-col items-center gap-3 relative">
                    <div className={`w-24 h-24 border-2 rounded-xl flex items-center justify-center transition-all duration-300 ${booked ? 'bg-accent border-accent shadow-[0_0_30px_rgba(151,2,234,0.4)]' : 'bg-secondaryDepth/20 border-primary'}`}>
                        {booked ? <Building size={40} className="text-white" /> : <Building size={40} className="text-primary" />}
                    </div>
                    <span className="text-xs text-center font-mono">{booked ? "Ready!" : "Available"}<br/>(Instant)</span>
                    
                    {/* Success Indicator */}
                    <AnimatePresence>
                        {booked && (
                            <motion.div 
                                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                className="absolute -top-2 -right-2 bg-green-500 text-black rounded-full p-1"
                            >
                                <Check size={12} strokeWidth={4} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                 </div>
            </div>
            
            <button 
                onClick={() => setBooked(!booked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all active:scale-95 ${booked ? 'bg-red-500/20 text-red-500 border border-red-500/50' : 'bg-primary text-black hover:bg-white'}`}
            >
                {booked ? "Leave Hotel (Release)" : "Book Room (Provision)"}
            </button>
        </motion.div>
    )
}

const ScalableVisual = () => {
    const [guests, setGuests] = useState(2);
    // Limit guests between 1 and 6
    const updateGuests = (delta: number) => {
        setGuests(prev => Math.min(Math.max(prev + delta, 1), 6));
    };

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center gap-8 w-full"
        >
            <div className="flex gap-2">
                <div className="flex flex-col gap-2 items-center bg-secondaryDepth/20 p-4 rounded-xl border border-secondaryDepth/50 min-w-[120px]">
                    <span className="text-xs uppercase text-depth tracking-wider font-bold">Guests</span>
                    <div className="flex items-center gap-1 text-accent">
                         {Array.from({length: guests}).map((_, i) => (
                             <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex">
                                <Users size={20} />
                             </motion.div>
                         ))}
                    </div>
                </div>
                <ArrowRight className="text-depth self-center" />
                <div className="flex flex-col gap-2 items-center bg-secondaryDepth/20 p-4 rounded-xl border border-secondaryDepth/50 min-w-[120px]">
                    <span className="text-xs uppercase text-depth tracking-wider font-bold">Rooms</span>
                    <div className="flex items-center gap-1 text-white">
                         {Array.from({length: guests}).map((_, i) => (
                             <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex">
                                <Square size={20} fill="currentColor" className="text-secondaryDepth" />
                             </motion.div>
                         ))}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-black/20 p-2 rounded-lg">
                <button onClick={() => updateGuests(-1)} className="p-2 hover:bg-white/10 rounded-md transition-colors" disabled={guests <= 1}>
                    <Minus size={20} />
                </button>
                <span className="font-mono w-8 text-center">{guests}</span>
                <button onClick={() => updateGuests(1)} className="p-2 hover:bg-white/10 rounded-md transition-colors" disabled={guests >= 6}>
                    <Plus size={20} />
                </button>
            </div>
            
            <p className="text-xs text-depth">Adjust guests to see rooms auto-scale.</p>
        </motion.div>
    )
}

const PayVisual = () => {
    const [active, setActive] = useState(false);
    const [cost, setCost] = useState(0.00);

    useEffect(() => {
        let interval: ReturnType<typeof setTimeout>;
        if (active) {
            interval = setInterval(() => {
                setCost(c => c + 0.05);
            }, 100);
        }
        return () => clearInterval(interval);
    }, [active]);

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center gap-8 w-full"
        >
             <div className="flex items-center gap-8">
                {/* Status */}
                <div className={`w-32 h-32 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-300 ${active ? 'border-accent bg-accent/10 shadow-[0_0_40px_rgba(151,2,234,0.3)]' : 'border-secondaryDepth bg-transparent'}`}>
                    <PowerButton active={active} />
                    <span className={`text-xs font-bold mt-2 uppercase ${active ? 'text-accent' : 'text-depth'}`}>
                        {active ? "Occupied" : "Vacant"}
                    </span>
                </div>

                {/* Bill */}
                <div className="flex flex-col gap-1 bg-black p-4 rounded-lg border border-secondaryDepth/50 min-w-[140px]">
                    <span className="text-xs text-depth uppercase tracking-wider">Total Bill</span>
                    <div className="text-2xl font-mono text-green-400 flex items-center">
                        <span className="mr-1">$</span>
                        {cost.toFixed(2)}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                        <span className="text-[10px] text-depth">{active ? "Billing Active" : "Billing Paused"}</span>
                    </div>
                </div>
             </div>

             <button 
                onClick={() => setActive(!active)}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all active:scale-95 ${active ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-black'}`}
            >
                {active ? <><PauseCircle size={20}/> Check Out</> : <><PlayCircle size={20}/> Check In</>}
            </button>
        </motion.div>
    )
}

const PowerButton = ({ active }: { active: boolean }) => (
    <div className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${active ? 'border-accent text-accent' : 'border-depth text-depth'}`}>
        <div className={`w-1 h-4 absolute top-[-2px] bg-background transition-colors`}/>
        <div className={`w-0.5 h-3 absolute top-[-2px] ${active ? 'bg-accent' : 'bg-depth'}`}/>
        <div className={`w-3 h-3 border-t-2 border-r-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0`}/> 
        {/* Simple visual rep of standard power icon shape not needed, just using circle logic */}
        <div className="w-6 h-6 rounded-full border-2 border-current border-t-transparent" style={{ transform: 'rotate(-45deg)' }} />
    </div>
)

// --- SLIDE 4: HOUSE VS HOTEL ---
export const HouseVsHotel = () => {
  const [factor, setFactor] = useState<'ownership' | 'cost' | 'time' | 'flexibility' | 'maintenance'>('ownership');

  const factors = [
      { id: 'ownership', label: 'Ownership', icon: User },
      { id: 'cost', label: 'Cost', icon: DollarSign },
      { id: 'time', label: 'Speed', icon: Clock },
      { id: 'flexibility', label: 'Flexibility', icon: Maximize },
      { id: 'maintenance', label: 'Maintenance', icon: Wrench },
  ];

  const content = {
      ownership: {
          house: { title: "Buy Everything", desc: "Buy land, cement, bricks. You own the liability.", icon: Hammer },
          hotel: { title: "Just Rent", desc: "Don't buy the building. Just book a room.", icon: Key }
      },
      cost: {
          house: { title: "High Upfront", desc: "Huge capital ($$$) before you even sleep there.", icon: DollarSign },
          hotel: { title: "Pay per Night", desc: "Small daily cost. No huge debt. Healthy cash flow.", icon: CreditCard }
      },
      time: {
          house: { title: "Months/Years", desc: "Wait for construction. Slow to start.", icon: Calendar },
          hotel: { title: "Minutes", desc: "Walk to reception, get key. Ready immediately.", icon: Clock }
      },
      flexibility: {
          house: { title: "Fixed Size", desc: "3 bedrooms forever. Renovations are hard.", icon: Square },
          hotel: { title: "Elastic Size", desc: "Need 10 more rooms? Done instantly.", icon: Layers }
      },
      maintenance: {
          house: { title: "You Fix It", desc: "Roof leak? AC broken? That's your problem.", icon: Wrench },
          hotel: { title: "They Fix It", desc: "Focus on sleeping, not fixing the plumbing.", icon: Shield }
      }
  };

  const current = content[factor];

  return (
    <div className="flex flex-col w-full h-full max-w-4xl gap-4 md:gap-6">
        {/* Navigation Tabs */}
        <div className="flex justify-between md:justify-center md:gap-4 overflow-x-auto pb-2 md:pb-0 w-full px-2 shrink-0">
            {factors.map(f => (
                <button
                    key={f.id}
                    onClick={() => setFactor(f.id as any)}
                    className={`flex flex-col md:flex-row items-center gap-2 p-3 rounded-lg min-w-[80px] md:min-w-0 transition-all ${factor === f.id ? 'bg-primary text-black' : 'text-depth hover:text-white hover:bg-white/5'}`}
                >
                    <f.icon size={20} />
                    <span className="text-xs md:text-sm font-bold">{f.label}</span>
                </button>
            ))}
        </div>

        {/* Comparison Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
            
            {/* On Prem */}
            <motion.div 
                key={`house-${factor}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-secondaryDepth/20 border border-secondaryDepth p-8 rounded-2xl flex flex-col items-center text-center gap-4 h-full justify-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-depth" />
                <div className="bg-depth/20 p-4 rounded-full text-depth">
                    <current.house.icon size={48} />
                </div>
                <h3 className="text-xl font-bold text-depth flex items-center gap-2">
                    <Home size={16} /> On-Premises
                </h3>
                <div className="h-px w-12 bg-depth/50 my-2" />
                <h4 className="text-xl md:text-2xl font-extrabold text-primary">{current.house.title}</h4>
                <p className="text-xs md:text-sm text-depth">{current.house.desc}</p>
            </motion.div>

            {/* Cloud */}
            <motion.div 
                key={`hotel-${factor}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-accent/10 border border-accent p-8 rounded-2xl flex flex-col items-center text-center gap-4 h-full justify-center relative overflow-hidden shadow-[0_0_30px_rgba(151,2,234,0.1)]"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                <div className="bg-accent/20 p-4 rounded-full text-accent">
                    <current.hotel.icon size={48} />
                </div>
                <h3 className="text-xl font-bold text-accent flex items-center gap-2">
                    <Cloud size={16} /> Cloud
                </h3>
                <div className="h-px w-12 bg-accent/50 my-2" />
                <h4 className="text-xl md:text-2xl font-extrabold text-white">{current.hotel.title}</h4>
                <p className="text-xs md:text-sm text-primary">{current.hotel.desc}</p>
            </motion.div>

        </div>
    </div>
  );
};

// --- SLIDE 5: PIZZA MODEL (IaaS/PaaS/SaaS) ---
export const PizzaModel = () => {
  const [activeTab, setActiveTab] = useState<'onprem' | 'iaas' | 'paas' | 'saas'>('iaas');

  const models = {
    onprem: {
        label: "On-Prem",
        title: "Made at Home",
        desc: "You buy flour, make dough, own the oven, pay for gas, cook, and clean. You do everything.",
        icon: Home
    },
    iaas: {
        label: "IaaS",
        title: "Take and Bake",
        desc: "Vendor gives you the pre-made pizza (Infrastructure). You take it home, use your oven/gas (OS/Runtime), and cook it.",
        icon: ShoppingBag
    },
    paas: {
        label: "PaaS",
        title: "Pizza Delivery",
        desc: "They make the dough, add toppings, and bake it (Platform). Delivered to your door. You just need a table and drinks (Data/Apps).",
        icon: Truck
    },
    saas: {
        label: "SaaS",
        title: "Dining Out",
        desc: "You go to a restaurant. You don't cook, clean, or own the oven. Just sit down and eat. Full service.",
        icon: Utensils
    }
  };

  const layers = [
    { name: 'Application', type: 'software' },
    { name: 'Data', type: 'software' },
    { name: 'Runtime', type: 'platform' },
    { name: 'Middleware', type: 'platform' },
    { name: 'OS', type: 'platform' },
    { name: 'Virtualization', type: 'infra' },
    { name: 'Servers', type: 'infra' },
    { name: 'Networking', type: 'infra' },
  ];

  const getColor = (layerType: string) => {
    // Logic based on the prompt's specific responsibility breakdown
    // On-Prem: User manages everything.
    if (activeTab === 'onprem') return 'bg-secondaryDepth border-depth text-depth';
    
    // SaaS: Vendor manages everything.
    if (activeTab === 'saas') return 'bg-accent border-accent text-white';

    // IaaS: Vendor manages Infra. User manages Platform + Software.
    if (activeTab === 'iaas') {
        if (layerType === 'infra') return 'bg-accent border-accent text-white';
        return 'bg-secondaryDepth border-depth text-depth';
    }

    // PaaS: Vendor manages Infra + Platform. User manages Software (Data/Apps).
    if (activeTab === 'paas') {
         if (layerType === 'infra' || layerType === 'platform') return 'bg-accent border-accent text-white';
         return 'bg-secondaryDepth border-depth text-depth';
    }
    
    return 'bg-secondaryDepth border-depth text-depth';
  };

  const currentModel = models[activeTab];
  const ModelIcon = currentModel.icon;

  return (
    <div className="flex flex-col w-full h-full max-w-5xl gap-6">
      <div className="flex p-1 bg-secondaryDepth rounded-lg shrink-0">
        {(['onprem', 'iaas', 'paas', 'saas'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-md uppercase transition-colors ${activeTab === tab ? 'bg-primary text-black' : 'text-depth hover:text-primary'}`}
          >
            {models[tab].label}
          </button>
        ))}
      </div>
      
      <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Stack Visualization */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 max-w-xs">
            {layers.map((layer) => (
            <motion.div
                key={layer.name}
                layout
                className={`p-2 rounded-md border text-center text-[10px] md:text-xs font-bold transition-colors duration-500 ${getColor(layer.type)}`}
            >
                {layer.name}
            </motion.div>
            ))}
             <div className="flex justify-between text-[10px] text-depth mt-2">
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-secondaryDepth rounded"/> You Manage</div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 bg-accent rounded"/> AWS Manages</div>
            </div>
          </div>

          {/* Analogy Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 bg-secondaryDepth/10 border border-secondaryDepth/50 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center gap-6 h-full justify-center"
          >
             <div className={`p-6 rounded-full ${activeTab === 'onprem' ? 'bg-secondaryDepth text-white' : 'bg-accent text-white'}`}>
                 <ModelIcon size={48} />
             </div>
             <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{currentModel.title}</h3>
                <p className="text-sm md:text-base text-primary/80 leading-relaxed max-w-md">"{currentModel.desc}"</p>
             </div>
          </motion.div>
      </div>
    </div>
  );
};

// --- SLIDE 6: EVOLUTION ---
export const Evolution = () => {
  const [activeTab, setActiveTab] = useState<'metal' | 'vm' | 'container'>('metal');

  const data = {
    metal: {
        label: "Bare Metal",
        analogyTitle: "Standalone Mansion",
        theory: "Physical server. Single tenant. No noisy neighbors. Maximum performance.",
        analogy: "You own the entire building. Great freedom, but expensive and slow to build. A waste of space for one person.",
        icon: Home
    },
    vm: {
        label: "Virtualization",
        analogyTitle: "Apartment Complex",
        theory: "Hypervisor splits server into VMs. Each has a full Guest OS (heavy). Good isolation.",
        analogy: "Building split into units. Self-contained with own kitchen/bath (Guest OS). Private, but 'heavy' infrastructure per unit.",
        icon: Building
    },
    container: {
        label: "Containers",
        analogyTitle: "Capsule Hotel",
        theory: "Shared Host OS Kernel. Lightweight, starts in milliseconds, portable.",
        analogy: "High density. You share the main infrastructure (plumbing/kitchen). Fits 10x more units. Check-in is instant.",
        icon: LayoutGrid
    }
  };

  const current = data[activeTab];
  const CurrentIcon = current.icon;

  return (
      <div className="flex flex-col w-full h-full max-w-5xl gap-6">
        {/* Tabs */}
        <div className="flex p-1 bg-secondaryDepth rounded-lg shrink-0">
            {(Object.keys(data) as Array<keyof typeof data>).map((key) => (
                <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-md uppercase transition-colors ${activeTab === key ? 'bg-primary text-black' : 'text-depth hover:text-primary'}`}
                >
                    {data[key].label}
                </button>
            ))}
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center">
            
            {/* Visual (Left) */}
            <div className="w-full md:w-1/2 aspect-square max-h-[300px] bg-secondaryDepth/20 rounded-2xl border-2 border-secondaryDepth relative overflow-hidden flex flex-col items-center p-4">
                <div className="text-xs font-mono text-depth mb-2 uppercase tracking-widest">Physical Server Resources</div>
                
                {/* Visual Logic */}
                <div className="flex-1 w-full relative rounded-lg border-2 border-depth/30 bg-black/20 overflow-hidden flex flex-col">
                    <AnimatePresence mode="wait">
                        {activeTab === 'metal' && (
                            <motion.div 
                                key="metal" 
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                                className="w-full h-full bg-accent/20 flex flex-col items-center justify-center gap-2 border-4 border-accent"
                            >
                                <span className="font-bold text-accent">APP</span>
                                <span className="text-[10px] text-accent/70">100% Resource Access</span>
                            </motion.div>
                        )}
                        {activeTab === 'vm' && (
                            <motion.div 
                                key="vm"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2 p-2"
                            >
                                {[1,2,3,4].map(i => (
                                    <div key={i} className="bg-secondaryDepth/40 border border-primary/30 rounded flex flex-col items-center justify-center p-1">
                                        <div className="w-full h-1/3 bg-depth/50 rounded-sm mb-1 text-[8px] flex items-center justify-center">Guest OS</div>
                                        <div className="flex-1 w-full bg-primary/20 rounded-sm flex items-center justify-center text-[10px] font-bold">App</div>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                        {activeTab === 'container' && (
                            <motion.div 
                                key="container"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="w-full h-full flex flex-col p-2 gap-2"
                            >
                                <div className="grid grid-cols-4 grid-rows-3 gap-1 flex-1">
                                     {Array.from({length: 12}).map((_, i) => (
                                         <div key={i} className="bg-accent/30 border border-accent/50 rounded-sm flex items-center justify-center">
                                            <div className="w-1 h-1 bg-accent rounded-full"/>
                                         </div>
                                     ))}
                                </div>
                                <div className="h-8 bg-depth/30 rounded border border-depth/50 flex items-center justify-center text-[10px] font-mono">
                                    Shared Host OS Kernel
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Content (Right) */}
            <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full md:w-1/2 flex flex-col gap-4 text-left"
            >
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-accent/10 rounded-full text-accent border border-accent/20">
                        <CurrentIcon size={32} />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-depth uppercase">The Analogy</div>
                        <h3 className="text-2xl font-bold text-white">{current.analogyTitle}</h3>
                    </div>
                </div>
                
                <div className="bg-secondaryDepth/10 p-4 rounded-lg border-l-2 border-accent">
                    <p className="text-sm italic text-primary/90">"{current.analogy}"</p>
                </div>

                <div>
                    <div className="text-xs font-bold text-depth uppercase mb-1">The Theory</div>
                    <p className="text-sm text-depth leading-relaxed">{current.theory}</p>
                </div>
            </motion.div>

        </div>
      </div>
  );
};

// --- SLIDE 7: COMPUTE ---
export const Compute = () => {
  const [activeTab, setActiveTab] = useState<'ec2' | 'lambda' | 'eks'>('ec2');

  const data = {
    ec2: {
        label: "EC2",
        analogyTitle: "Car Rental",
        theory: "Secure, resizable virtual servers (Instances) with full control over the OS and networking. It runs continuously until stopped, and you pay for the time it is 'Running'—even if idle.",
        analogy: "EC2 is like Renting a Car. You choose the car model (Instance Type—Sedan for small tasks, Truck for heavy loads). You get the keys, drive yourself, decide the route, and control the AC. Most importantly, you pay the daily rental fee whether you are driving 100km/h or parked in the garage. You pay for capacity, not just movement.",
        icon: Car
    },
    lambda: {
        label: "Lambda",
        analogyTitle: "Ride-Hailing (Uber/Grab)",
        theory: "Serverless compute that runs code in response to events (triggers). No servers to provision. You only pay for the milliseconds your code executes. If no one uses your app, you pay $0.",
        analogy: "Lambda is like using Uber or Grab. You don't rent a car or care about the engine. You just want to get from Point A to Point B. The car arrives instantly, takes you there, and leaves. You only pay for the trip duration. If you aren't going anywhere, you pay nothing. Purely event-driven.",
        icon: Zap
    },
    eks: {
        label: "EKS",
        analogyTitle: "Bus Fleet Management",
        theory: "Managed Kubernetes Orchestrator. It manages the lifecycle of thousands of containers (Pods) across multiple servers (Nodes), handling health checks and scaling automatically.",
        analogy: "If EC2 is a car and Lambda is a taxi, EKS is the Central Command for a City Bus System. You manage a fleet of hundreds of buses (Containers). EKS decides: 'Bus 501 to Route A', 'Bus 202 broke down, replace it', and 'Rush hour, deploy 50 more buses'. It coordinates the chaos so the city moves smoothly.",
        icon: Bus
    }
  };

  const current = data[activeTab];
  const CurrentIcon = current.icon;

  return (
      <div className="flex flex-col w-full h-full max-w-5xl gap-6">
        {/* Tabs */}
        <div className="flex p-1 bg-secondaryDepth rounded-lg shrink-0">
            {(Object.keys(data) as Array<keyof typeof data>).map((key) => (
                <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-md uppercase transition-colors ${activeTab === key ? 'bg-primary text-black' : 'text-depth hover:text-primary'}`}
                >
                    {data[key].label}
                </button>
            ))}
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center">
            
            {/* Visual (Left) */}
            <div className="w-full md:w-1/2 aspect-square max-h-[300px] bg-secondaryDepth/20 rounded-2xl border-2 border-secondaryDepth relative overflow-hidden flex flex-col items-center justify-center p-4">
                <AnimatePresence mode="wait">
                    {activeTab === 'ec2' && (
                        <motion.div 
                            key="ec2" 
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <Car size={64} className="text-white" />
                            <div className="bg-green-500/20 text-green-500 border border-green-500 px-3 py-1 rounded text-xs font-mono animate-pulse">STATUS: RUNNING</div>
                            <div className="text-[10px] text-depth">Daily Rate Applied</div>
                        </motion.div>
                    )}
                    {activeTab === 'lambda' && (
                        <motion.div 
                            key="lambda"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <motion.div 
                                animate={{ x: [-100, 0, 100], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <Car size={48} className="text-accent" />
                            </motion.div>
                            <div className="absolute bottom-4 text-xs font-mono text-accent">Duration: 250ms ($0.000004)</div>
                        </motion.div>
                    )}
                    {activeTab === 'eks' && (
                        <motion.div 
                            key="eks"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="w-full h-full grid grid-cols-3 gap-2 p-4"
                        >
                            {Array.from({length: 9}).map((_, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-primary/20 rounded flex items-center justify-center"
                                >
                                    <Bus size={20} className="text-primary" />
                                </motion.div>
                            ))}
                            <div className="absolute bottom-2 right-2 bg-accent text-white px-2 py-1 rounded text-[10px] font-bold">Orchestrating...</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Content (Right) */}
            <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-full md:w-1/2 flex flex-col gap-4 text-left"
            >
                <div className="flex items-center gap-4">
                    <div className="p-4 bg-accent/10 rounded-full text-accent border border-accent/20">
                        <CurrentIcon size={32} />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-depth uppercase">The Analogy</div>
                        <h3 className="text-2xl font-bold text-white">{current.analogyTitle}</h3>
                    </div>
                </div>
                
                <div className="bg-secondaryDepth/10 p-4 rounded-lg border-l-2 border-accent">
                    <p className="text-sm italic text-primary/90">"{current.analogy}"</p>
                </div>

                <div>
                    <div className="text-xs font-bold text-depth uppercase mb-1">The Theory</div>
                    <p className="text-sm text-depth leading-relaxed">{current.theory}</p>
                </div>
            </motion.div>

        </div>
      </div>
  );
};

// --- SLIDE 8: STORAGE ---
export const Storage = () => {
    const [activeTab, setActiveTab] = useState<'ebs' | 'efs' | 's3'>('ebs');

    const data = {
      ebs: {
          label: "EBS (Block)",
          analogyTitle: "Personal Laptop Hard Drive",
          theory: "Behaves like a physical hard disk attached to one server. Very fast. You can edit small parts of data without rewriting the whole file. Usually attached to only one server.",
          analogy: "Block Storage is like the hard drive inside your laptop. It's physically attached to your machine. You can edit a single word in a document instantly. No one else can access it unless they are on your machine.",
          icon: HardDrive
      },
      efs: {
          label: "EFS (File)",
          analogyTitle: "Google Drive for a Team",
          theory: "Network storage with folders and files. Multiple servers can access, read, and edit the same files simultaneously.",
          analogy: "File Storage is like a shared Google Drive used by a team. Multiple team members (Servers) can see the same folder structure, open the same files, and collaborate in real-time.",
          icon: Folder
      },
      s3: {
          label: "S3 (Object)",
          analogyTitle: "E-Commerce Warehouse",
          theory: "Infinite scale storage accessed via the internet. Flat structure (no real folders). Data is immutable—you must replace the whole file to change it.",
          analogy: "Object Storage is like a huge e-commerce warehouse (Shopee/Tokopedia). You send a package (File) and get an Order Number (Key). You don't know where it's stored. To change the item, you can't just open the box in the warehouse; you must send a new package.",
          icon: Package
      }
    };
  
    const current = data[activeTab];
    const CurrentIcon = current.icon;
  
    return (
        <div className="flex flex-col w-full h-full max-w-5xl gap-6">
          {/* Tabs */}
          <div className="flex p-1 bg-secondaryDepth rounded-lg shrink-0">
              {(Object.keys(data) as Array<keyof typeof data>).map((key) => (
                  <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-md uppercase transition-colors ${activeTab === key ? 'bg-primary text-black' : 'text-depth hover:text-primary'}`}
                  >
                      {data[key].label}
                  </button>
              ))}
          </div>
  
          <div className="flex-1 flex flex-col md:flex-row gap-8 items-center justify-center">
              
              {/* Visual (Left) */}
              <div className="w-full md:w-1/2 aspect-square max-h-[300px] bg-secondaryDepth/20 rounded-2xl border-2 border-secondaryDepth relative overflow-hidden flex flex-col items-center justify-center p-4">
                  <AnimatePresence mode="wait">
                      {activeTab === 'ebs' && (
                          <motion.div 
                              key="ebs" 
                              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                              className="flex flex-col items-center justify-center relative w-full h-full gap-4"
                          >
                                <div className="flex items-center gap-1">
                                    <Laptop size={64} className="text-white"/>
                                    <div className="w-8 h-1 bg-accent"/>
                                    <div className="p-2 border border-accent rounded bg-accent/10">
                                        <HardDrive size={32} className="text-accent"/>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-[10px] text-accent font-mono">
                                    <span className="animate-pulse">READ</span>
                                    <span>/</span>
                                    <span className="animate-pulse">WRITE</span>
                                </div>
                                <div className="text-[10px] text-depth">Private & Fast</div>
                          </motion.div>
                      )}
                      {activeTab === 'efs' && (
                          <motion.div 
                              key="efs"
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              className="flex flex-col items-center justify-center w-full h-full relative"
                          >
                              {/* Central Folder */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black p-2 rounded-full border border-blue-500">
                                  <Folder size={40} className="text-blue-500"/>
                              </div>
                              
                              {/* Users */}
                              {[0, 120, 240].map((deg, i) => (
                                  <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{ 
                                        top: '50%', left: '50%', 
                                        transform: `rotate(${deg}deg) translate(80px) rotate(-${deg}deg)` 
                                    }}
                                  >
                                      <Users size={24} className="text-white"/>
                                      <div className="w-20 h-0.5 bg-blue-500/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" style={{ transform: `rotate(${deg + 180}deg) translate(40px)` }} />
                                  </motion.div>
                              ))}
                              
                              <div className="absolute bottom-4 text-[10px] text-depth">Shared Access</div>
                          </motion.div>
                      )}
                      {activeTab === 's3' && (
                          <motion.div 
                              key="s3"
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              className="flex flex-col items-center justify-center gap-2 w-full h-full"
                          >
                               <div className="flex items-center gap-4">
                                   <div className="flex flex-col items-center">
                                       <Package size={40} className="text-white"/>
                                       <span className="text-[8px] text-depth">Package</span>
                                   </div>
                                   <ArrowRight className="text-accent animate-pulse"/>
                                   <div className="flex flex-col items-center p-3 border-2 border-dashed border-depth rounded bg-secondaryDepth/20">
                                       <Warehouse size={40} className="text-depth"/>
                                       <span className="text-[8px] text-depth">Warehouse</span>
                                   </div>
                                   <ArrowRight className="text-accent animate-pulse" style={{ transform: 'rotate(180deg)' }}/>
                                   <div className="flex flex-col items-center">
                                       <Ticket size={40} className="text-yellow-500"/>
                                       <span className="text-[8px] text-yellow-500">Order #</span>
                                   </div>
                               </div>
                               <div className="mt-4 bg-red-500/10 text-red-500 px-2 py-1 rounded text-[10px] border border-red-500/20">
                                   Cannot modify inside.
                               </div>
                          </motion.div>
                      )}
                  </AnimatePresence>
              </div>
  
              {/* Content (Right) */}
              <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="w-full md:w-1/2 flex flex-col gap-4 text-left"
              >
                  <div className="flex items-center gap-4">
                      <div className="p-4 bg-accent/10 rounded-full text-accent border border-accent/20">
                          <CurrentIcon size={32} />
                      </div>
                      <div>
                          <div className="text-xs font-bold text-depth uppercase">The Analogy</div>
                          <h3 className="text-2xl font-bold text-white">{current.analogyTitle}</h3>
                      </div>
                  </div>
                  
                  <div className="bg-secondaryDepth/10 p-4 rounded-lg border-l-2 border-accent">
                      <p className="text-sm italic text-primary/90">"{current.analogy}"</p>
                  </div>
  
                  <div>
                      <div className="text-xs font-bold text-depth uppercase mb-1">The Theory</div>
                      <p className="text-sm text-depth leading-relaxed">{current.theory}</p>
                  </div>
              </motion.div>
  
          </div>
        </div>
    );
};

// --- SLIDE 9: DATABASES ---
export const Databases = () => {
    return (
        <div className="flex gap-12 items-center">
            {/* RDS */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-48 h-48 bg-white/5 border border-white/10 grid grid-cols-3 grid-rows-3 gap-1 p-2 rounded-lg">
                    {Array.from({length: 9}).map((_, i) => (
                        <div key={i} className="bg-secondaryDepth/50 rounded flex items-center justify-center text-[8px] text-depth">
                            DATA
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-accent">RDS (SQL)</h3>
                    <p className="text-xs text-depth">Strict structure (Excel-like)</p>
                </div>
            </div>
            
            <div className="w-px h-32 bg-secondaryDepth/50" />

            {/* DynamoDB */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-48 h-48 relative">
                    {Array.from({length: 5}).map((_, i) => (
                         <motion.div
                            key={i}
                            animate={{ 
                                x: [Math.random()*20, Math.random()*-20, Math.random()*20],
                                y: [Math.random()*20, Math.random()*-20, Math.random()*20]
                            }}
                            transition={{ duration: 3 + i, repeat: Infinity, ease: 'linear' }}
                            className="absolute bg-accent/20 border border-accent text-accent rounded-full px-3 py-1 text-xs font-mono top-1/2 left-1/2"
                            style={{ marginLeft: (Math.random() - 0.5) * 100, marginTop: (Math.random() - 0.5) * 100 }}
                         >
                            {"{key:val}"}
                         </motion.div>
                    ))}
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-accent">DynamoDB (NoSQL)</h3>
                    <p className="text-xs text-depth">Flexible structure (JSON-like)</p>
                </div>
            </div>
        </div>
    )
}

// --- SLIDE 10: VPC (Internal Network) ---
export const VPC = () => {
    const [selected, setSelected] = useState<'vpc' | 'igw' | 'public' | 'private' | 'nat' | 'server'>('vpc');

    const data = {
        vpc: {
            title: "VPC (Housing Complex)",
            theory: "A logically isolated part of AWS Cloud where you define your own IP range, subnets, and network rules.",
            analogy: "One Large Gated Housing Complex. You own the land, decide the road layout, and who can enter. Neighbors (other VPCs) can't enter freely.",
        },
        igw: {
            title: "Internet Gateway (Main Gate)",
            theory: "Connects the VPC to the public internet. Without it, the VPC is isolated.",
            analogy: "The Main Gate / Security Post connecting the housing complex to the city's main road. If locked, no one enters or leaves.",
        },
        public: {
            title: "Public Subnet (Front Shops)",
            theory: "A network segment with direct access to the Internet Gateway.",
            analogy: "Shop houses along the main road near the gate. Easy to access, visible to outsiders. Suitable for reception (Web Servers).",
        },
        private: {
            title: "Private Subnet (Residential)",
            theory: "A network segment with no direct internet access for security.",
            analogy: "Residential cluster deep inside. Quiet, secure, guarded. Outsiders cannot enter directly. Valuable items (Databases) are kept here.",
        },
        nat: {
            title: "NAT Gateway (Guard)",
            theory: "Allows private instances to access the internet (e.g. for updates) but prevents internet from initiating connections to them.",
            analogy: "A Trusted Security Guard (Personal Shopper). Residents in the back ask the guard to buy groceries (updates). Outsiders only see the guard.",
        },
        server: {
            title: "EC2 Instance (House)",
            theory: "A virtual computer where your application runs.",
            analogy: "A House built on the land. Residents (Apps & Data) live inside.",
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 w-full h-full max-w-6xl items-center justify-center">
            {/* Interactive Map */}
            <div className="relative w-full max-w-lg aspect-[4/3] bg-[#1a1a1a] rounded-xl border-2 border-secondaryDepth p-4 overflow-hidden select-none">
                
                {/* VPC Container */}
                <motion.div 
                    onClick={() => setSelected('vpc')}
                    className={`absolute inset-4 border-2 border-dashed rounded-lg transition-colors cursor-pointer ${selected === 'vpc' ? 'border-accent bg-accent/5' : 'border-depth/30 hover:border-depth'}`}
                >
                     <span className="absolute top-2 left-2 text-xs font-bold text-depth flex items-center gap-1"><Shield size={12}/> VPC (Gated Complex)</span>
                </motion.div>

                {/* IGW (Gate) */}
                <motion.div
                    onClick={(e) => { e.stopPropagation(); setSelected('igw'); }}
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-12 rounded-b-lg border-x-2 border-b-2 flex items-center justify-center cursor-pointer transition-all z-20 ${selected === 'igw' ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20' : 'bg-shadow border-depth text-depth hover:text-white'}`}
                >
                    <span className="text-xs font-bold flex items-center gap-1"><DoorOpen size={14}/> Main Gate</span>
                </motion.div>

                {/* Public Subnet */}
                <motion.div
                    onClick={(e) => { e.stopPropagation(); setSelected('public'); }}
                    className={`absolute top-20 left-8 right-8 h-24 rounded-lg border flex items-center justify-center cursor-pointer transition-all ${selected === 'public' ? 'bg-green-500/10 border-green-500' : 'bg-green-900/10 border-green-900/30 hover:bg-green-900/20'}`}
                >
                    <span className="absolute top-2 left-2 text-[10px] text-green-500 font-bold uppercase">Public Subnet (Shops)</span>
                    <div className="flex gap-8">
                         <div className="flex flex-col items-center opacity-50"><Store size={32} className="text-green-500"/><span className="text-[8px] text-green-500">Shop 1</span></div>
                         <div className="flex flex-col items-center opacity-50"><Store size={32} className="text-green-500"/><span className="text-[8px] text-green-500">Shop 2</span></div>
                    </div>
                </motion.div>

                {/* NAT Gateway */}
                <motion.div
                    onClick={(e) => { e.stopPropagation(); setSelected('nat'); }}
                    className={`absolute top-[160px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 z-10 flex items-center justify-center cursor-pointer transition-all ${selected === 'nat' ? 'bg-blue-500 border-white shadow-lg scale-110' : 'bg-shadow border-blue-500 text-blue-500'}`}
                >
                    <UserCheck size={24} className={selected === 'nat' ? 'text-white' : 'text-blue-500'} />
                </motion.div>

                {/* Private Subnet */}
                <motion.div
                    onClick={(e) => { e.stopPropagation(); setSelected('private'); }}
                    className={`absolute bottom-8 left-8 right-8 h-32 rounded-lg border flex items-center justify-center cursor-pointer transition-all ${selected === 'private' ? 'bg-red-500/10 border-red-500' : 'bg-red-900/10 border-red-900/30 hover:bg-red-900/20'}`}
                >
                    <span className="absolute top-2 left-2 text-[10px] text-red-500 font-bold uppercase">Private Subnet (Residential)</span>
                    
                    {/* Server */}
                    <motion.div
                        onClick={(e) => { e.stopPropagation(); setSelected('server'); }}
                        className={`p-3 rounded border bg-black transition-all cursor-pointer flex flex-col items-center gap-1 ${selected === 'server' ? 'border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'border-red-500/50 hover:border-white'}`}
                    >
                        <Home size={24} className="text-white"/>
                        <span className="text-[8px] text-depth">House (EC2)</span>
                    </motion.div>
                </motion.div>

            </div>

            {/* Explanation Panel */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 min-h-[250px]">
                 <AnimatePresence mode="wait">
                     <motion.div
                        key={selected}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col gap-4"
                     >
                         <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                             <span className="w-2 h-8 bg-accent rounded-full"/>
                             {data[selected].title}
                         </h3>
                         
                         <div className="bg-secondaryDepth/10 p-4 rounded-lg border-l-2 border-accent">
                             <div className="text-xs font-bold text-depth uppercase mb-1">Analogy</div>
                             <p className="text-sm italic text-primary/90">"{data[selected].analogy}"</p>
                         </div>

                         <div>
                             <div className="text-xs font-bold text-depth uppercase mb-1">Technical Theory</div>
                             <p className="text-sm text-depth leading-relaxed">{data[selected].theory}</p>
                         </div>
                     </motion.div>
                 </AnimatePresence>
                 <div className="mt-auto text-xs text-depth text-center bg-black/20 p-2 rounded">
                     Click on map elements to explore concepts.
                 </div>
            </div>
        </div>
    )
}

// --- SLIDE 11: GLOBAL (External Network) ---
export const Global = () => {
    const [tab, setTab] = useState<'dns' | 'cdn'>('dns');

    return (
        <div className="flex flex-col w-full h-full max-w-5xl gap-6 items-center">
            {/* Tabs */}
            <div className="flex p-1 bg-secondaryDepth rounded-lg shrink-0 w-full max-w-md">
                <button
                    onClick={() => setTab('dns')}
                    className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-md uppercase transition-colors flex items-center justify-center gap-2 ${tab === 'dns' ? 'bg-primary text-black' : 'text-depth hover:text-primary'}`}
                >
                    <Search size={16}/> Route 53 (DNS)
                </button>
                <button
                    onClick={() => setTab('cdn')}
                    className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-md uppercase transition-colors flex items-center justify-center gap-2 ${tab === 'cdn' ? 'bg-primary text-black' : 'text-depth hover:text-primary'}`}
                >
                    <Globe size={16}/> CloudFront (CDN)
                </button>
            </div>

            <div className="flex-1 w-full bg-secondaryDepth/10 rounded-2xl border border-secondaryDepth/50 p-4 md:p-8 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    {tab === 'dns' ? <Route53Visual key="dns"/> : <CloudFrontVisual key="cdn"/>}
                </AnimatePresence>
            </div>
        </div>
    )
}

const Route53Visual = () => {
    const [step, setStep] = useState(0); // 0: Idle, 1: Found

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-4xl justify-center"
        >
            {/* Phone Interface */}
            <div className="relative w-64 h-[400px] bg-black border-4 border-secondaryDepth rounded-[2rem] p-3 flex flex-col gap-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-secondaryDepth rounded-b-xl z-20"/>
                
                {/* Screen */}
                <div className="w-full h-full bg-white text-black rounded-[1.5rem] overflow-hidden flex flex-col relative">
                    <div className="bg-gray-100 p-4 pb-2 border-b pt-8">
                        <div className="text-xs font-bold text-gray-400 uppercase">Contacts</div>
                        <div className="text-lg font-bold mt-1">Route 53</div>
                    </div>

                    <div className="p-4 flex flex-col gap-2">
                         <div 
                            onClick={() => setStep(step === 0 ? 1 : 0)}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-blue-50 transition-colors active:scale-95"
                         >
                             <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                             <div>
                                 <div className="font-bold text-sm">Accenture.com</div>
                                 <div className="text-[10px] text-gray-500">Tap to call</div>
                             </div>
                         </div>
                    </div>
                    
                    {/* Overlay Result */}
                    <AnimatePresence>
                        {step === 1 && (
                            <motion.div 
                                initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
                                className="absolute inset-0 bg-blue-500/90 backdrop-blur text-white flex flex-col items-center justify-center p-6 text-center"
                            >
                                <div className="text-sm opacity-80 mb-2">Connecting to...</div>
                                <div className="text-2xl font-bold mb-4">192.0.2.1</div>
                                <p className="text-xs opacity-70">Route 53 translated the name to this number.</p>
                                <button onClick={() => setStep(0)} className="mt-8 bg-white text-blue-500 px-4 py-2 rounded-full text-xs font-bold">Close</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Explainer */}
            <div className="max-w-xs flex flex-col gap-4">
                 <h3 className="text-xl font-bold text-accent">The Phonebook Analogy</h3>
                 <p className="text-sm text-depth">
                    "Imagine memorizing every friend's phone number. Impossible."
                 </p>
                 <p className="text-sm text-depth">
                    Instead, you use a <b>Contacts List</b>. You tap 'Mom', and the phone connects. Route 53 does the same: you type 'google.com', and it finds the IP address.
                 </p>
                 <div className="text-xs bg-secondaryDepth/20 p-2 rounded border border-secondaryDepth/50">
                    <span className="text-accent font-bold">Failover:</span> Like having 2 numbers for Mom. If one is busy, call the other.
                 </div>
            </div>
        </motion.div>
    )
}

const CloudFrontVisual = () => {
    const [useCDN, setUseCDN] = useState(false);
    const [delivering, setDelivering] = useState(false);

    useEffect(() => {
        if(delivering) {
            const time = useCDN ? 1000 : 3000;
            const t = setTimeout(() => setDelivering(false), time);
            return () => clearTimeout(t);
        }
    }, [delivering, useCDN]);

    return (
        <div className="flex flex-col w-full h-full items-center gap-6">
             {/* Controls */}
             <div className="flex items-center gap-4 bg-secondaryDepth/20 p-2 rounded-lg">
                 <span className="text-xs font-bold text-depth uppercase">Distribution Mode</span>
                 <button 
                    onClick={() => !delivering && setUseCDN(false)}
                    className={`px-3 py-1 rounded text-xs transition-colors ${!useCDN ? 'bg-red-500 text-white' : 'text-depth hover:text-white'}`}
                 >
                    Direct (Origin)
                 </button>
                 <button 
                    onClick={() => !delivering && setUseCDN(true)}
                    className={`px-3 py-1 rounded text-xs transition-colors ${useCDN ? 'bg-green-500 text-white' : 'text-depth hover:text-white'}`}
                 >
                    CDN (Edge)
                 </button>
             </div>

             <div className="flex-1 w-full flex items-center justify-between relative max-w-2xl px-8">
                 {/* Origin */}
                 <div className="flex flex-col items-center gap-2 relative z-10">
                     <Factory size={48} className="text-red-500"/>
                     <div className="text-center">
                         <div className="text-xs font-bold text-red-500">Jakarta Factory</div>
                         <div className="text-[10px] text-depth">Origin Server</div>
                     </div>
                 </div>

                 {/* Path Visualization */}
                 <div className="flex-1 h-1 bg-secondaryDepth/30 mx-4 relative">
                     {/* Edge Store (Only in CDN mode) */}
                     {useCDN && (
                         <div className="absolute left-2/3 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                             <div className="w-8 h-8 bg-secondaryDepth rounded-full border-2 border-green-500 flex items-center justify-center">
                                 <Store size={16} className="text-green-500"/>
                             </div>
                             <div className="text-[8px] text-green-500 absolute top-10 w-24 text-center">Local Store (Edge)</div>
                         </div>
                     )}

                     {/* Package */}
                     {delivering && (
                         <motion.div 
                            initial={{ left: useCDN ? '66%' : '0%' }}
                            animate={{ left: '100%' }}
                            transition={{ duration: useCDN ? 0.5 : 2, ease: 'linear' }}
                            className="absolute top-1/2 -translate-y-1/2 z-20"
                         >
                             <Package size={24} className="text-white fill-accent"/>
                         </motion.div>
                     )}
                 </div>

                 {/* User */}
                 <div className="flex flex-col items-center gap-2 relative z-10">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                         <User size={24} className="text-black"/>
                     </div>
                     <div className="text-center">
                         <div className="text-xs font-bold text-white">London Customer</div>
                         <div className="text-[10px] text-depth">End User</div>
                     </div>
                 </div>
             </div>

             {/* Action */}
             <button 
                disabled={delivering}
                onClick={() => setDelivering(true)}
                className="bg-primary text-black px-8 py-2 rounded-full font-bold hover:bg-white disabled:opacity-50 transition-all active:scale-95"
             >
                {delivering ? 'Delivering...' : 'Order Snack'}
             </button>

             {/* Explanation */}
             <div className="text-center max-w-lg">
                 <p className="text-sm text-depth italic">
                     {useCDN 
                        ? "Local Store: Customer buys from the nearby 'Indomaret' (Edge Location). Fast & Factory isn't crowded." 
                        : "Direct: Shipping one snack all the way from Jakarta. Slow, expensive, and high latency."}
                 </p>
             </div>
        </div>
    )
}

// --- SLIDE 12: CLOSING ---
export const Closing = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-8 text-center">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
            >
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
                <Cloud size={80} className="text-accent relative z-10" />
            </motion.div>
            
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey Started</h2>
                <p className="text-depth max-w-md mx-auto">
                    You've explored the fundamentals of AWS through analogies. 
                    Real cloud engineering is just about connecting these blocks to build solutions.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
                <a href="https://aws.amazon.com/training/" target="_blank" rel="noreferrer" className="p-4 bg-secondaryDepth/20 hover:bg-secondaryDepth/40 border border-secondaryDepth rounded-xl transition-all group">
                    <div className="flex items-center justify-center gap-2 mb-2 group-hover:text-accent text-white">
                        <Globe size={20} />
                        <span className="font-bold">AWS Training</span>
                    </div>
                    <span className="text-xs text-depth">Official Certifications</span>
                </a>
                <a href="https://aws.amazon.com/free/" target="_blank" rel="noreferrer" className="p-4 bg-secondaryDepth/20 hover:bg-secondaryDepth/40 border border-secondaryDepth rounded-xl transition-all group">
                     <div className="flex items-center justify-center gap-2 mb-2 group-hover:text-accent text-white">
                        <CreditCard size={20} />
                        <span className="font-bold">Free Tier</span>
                    </div>
                    <span className="text-xs text-depth">Try it for free</span>
                </a>
            </div>
            
            <button onClick={() => window.location.reload()} className="flex items-center gap-2 text-depth hover:text-white transition-colors mt-8">
                <RefreshCw size={16} /> Restart Presentation
            </button>
        </div>
    )
}
