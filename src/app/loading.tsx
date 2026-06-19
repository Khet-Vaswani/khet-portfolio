export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/10 border-t-accent rounded-full animate-spin"></div>
        <div className="absolute inset-0 bg-accent/20 blur-[30px] -z-10 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
