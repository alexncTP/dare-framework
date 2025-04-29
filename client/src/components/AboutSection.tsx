import { ArrowRightIcon, UsersIcon, BrainIcon, EyeIcon, LightbulbIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-3 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-medium">
              {t('about.subtitle')}
            </div>
            <h2 className="gradient-text">{t('about.title')}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              {t('about.description')}
            </p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t('about.cards.community.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('about.cards.community.description')}
                </p>
                <a href="#contribute" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>{t('about.cards.community.link')}</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <BrainIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t('about.cards.human.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('about.cards.human.description')}
                </p>
                <a href="#manifesto" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>{t('about.cards.human.link')}</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <EyeIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t('about.cards.transparency.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('about.cards.transparency.description')}
                </p>
                <a href="#framework" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>{t('about.cards.transparency.link')}</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-300 blur-sm"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                  <LightbulbIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{t('about.cards.practical.title')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('about.cards.practical.description')}
                </p>
                <a href="#framework" className="mt-4 inline-flex items-center text-primary hover:text-primary/90">
                  <span>{t('about.cards.practical.link')}</span>
                  <ArrowRightIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t('about.footer.badge')}
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{t('about.footer.title')}</h3>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              {t('about.footer.description')}
            </p>
            
            <div className="mt-8 inline-flex shadow-sm overflow-hidden rounded-lg">
              <a 
                href="#framework" 
                className="px-6 py-3 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                {t('about.footer.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
