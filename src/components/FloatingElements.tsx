const FloatingElements = () => {
  return (
    <>
      {/* Floating geometric shapes */}
      <div className="fixed top-1/4 left-1/4 w-32 h-32 rounded-full bg-emerald-500/5 blur-3xl animate-float1"></div>
      <div className="fixed top-2/3 right-1/3 w-24 h-24 rounded-full bg-teal-600/5 blur-3xl animate-float2"></div>
      <div className="fixed top-1/3 right-1/4 w-20 h-20 rounded-lg bg-emerald-400/5 blur-3xl animate-float3 rotate-45"></div>
      <div className="fixed bottom-1/4 left-1/3 w-28 h-28 rounded-lg bg-teal-500/5 blur-3xl animate-float4 -rotate-45"></div>
      
      {/* Animated grid lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,212,191,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>
    </>
  );
};

export default FloatingElements;