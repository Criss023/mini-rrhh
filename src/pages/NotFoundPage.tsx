// src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';
import { usePageNotFound } from '../hooks/usePageNotFound';

function NotFoundPage() {
  usePageNotFound();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 max-w-md w-full">
        <p className="text-8xl font-bold text-blue-600 mb-4">404</p>
        <h1 className="text-2xl font-semibold text-slate-800 mb-2">
          Página no encontrada
        </h1>
        <p className="text-slate-500 mb-8">
          La URL que buscas no existe o fue movida.
        </p>
        <Link
          to="/dashboard"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
        >
          Volver al Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;