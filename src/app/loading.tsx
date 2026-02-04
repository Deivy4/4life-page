export default function Loading() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-gray-50">
      {/* Spinner */}
      <div className="w-24 h-24 border-4 border-t-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
}
