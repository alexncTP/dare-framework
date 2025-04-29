import { useTranslation } from "react-i18next";

export default function ManifestoSection() {
  const { t } = useTranslation();
  return (
    <section id="manifesto" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">{t('manifesto.title')}</h2>
          <div className="mt-10 prose prose-blue prose-lg mx-auto">
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-xl text-gray-600">
              {t('manifesto.subtitle')}
            </blockquote>
            
            <h3>{t('manifesto.principles.title')}</h3>
            
            <ul>
              {(t('manifesto.principles.list', { returnObjects: true }) as string[]).map((principle: string, index: number) => (
                <li key={index} className="mb-4">
                  <strong>{principle}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
