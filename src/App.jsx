import React from 'react';
import { Github, Mail, Phone, MapPin, ExternalLink, Download, ChevronRight, Code, Palette, Server, Smartphone } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import photo from './assets/my-photo.jpg';

const App = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">{t('nav.about')}</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">{t('nav.skills')}</a>
              <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">{t('nav.education')}</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">{t('nav.projects')}</a>
            </nav>

            {/* Right-side actions: Language toggle + Resume button */}
            <div className="flex items-center gap-4">
              {/* Language toggle */}
              <button
                onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                aria-label={lang === 'en' ? 'Switch to Russian' : 'Switch to English'}
              >
                {lang === 'en' ? 'RU' : 'EN'}
              </button>

              {/* Resume button */}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download size={16} />
                {t('buttons.resume')}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  {t('buttons.contact')}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1 w-80 h-80 mx-auto">
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                  <img
                    src={photo}
                    alt="Pavel Meshkov"
                    className="rounded-xl w-64 h-64 object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <Code className="text-blue-600" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                <Palette className="text-purple-600" size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('about.title')}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.text1')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.text2')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-gray-700">{t('about.email')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <span className="text-gray-700">{t('about.phone')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-blue-600" size={20} />
                  <span className="text-gray-700">{t('about.github')}</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('whatIDo')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Code size={16} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{t('whatIDoItems.frontend.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('whatIDoItems.frontend.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1">
                    <Palette size={16} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{t('whatIDoItems.uiux.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('whatIDoItems.uiux.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <Server size={16} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{t('whatIDoItems.api.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('whatIDoItems.api.description')}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg mt-1">
                    <Smartphone size={16} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{t('whatIDoItems.mobile.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('whatIDoItems.mobile.description')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}


      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('technicalSkills')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('skills.languages')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.jsTs')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.htmlCss')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.python')}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('skills.frameworks')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.react')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.nextjs')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.vue')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.tailwind')}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('skills.tools')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.git')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.bundlers')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.figma')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">{t('skills.docker')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('education')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{t('educationItems.hexletDegree.title')}</h3>
                <p className="text-blue-600 font-medium">{t('educationItems.hexletDegree.institution')}</p>
              </div>
              <div className="text-gray-500">{t('educationItems.hexletDegree.years')}</div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{t('educationItems.hexletCert.title')}</h3>
                <p className="text-blue-600 font-medium">{t('educationItems.hexletCert.institution')}</p>
              </div>
              <p className="text-gray-600 mb-4">{t('educationItems.hexletCert.description')}</p>
              <div className="text-gray-500">{t('educationItems.hexletCert.year')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('featuredProjects')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: BrainGames */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('projects.brainGames.title')}</h3>
                <p className="text-gray-600 mb-4">{t('projects.brainGames.description')}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">JS</span>
                </div>
              </div>
            </div>

            {/* Project 2: MindScape */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('projects.mindScape.title')}</h3>
                <p className="text-gray-600 mb-4">{t('projects.mindScape.description')}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">JS</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">HTML</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">CSS</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">LocalStorage</span>
                </div>
              </div>
            </div>

            {/* Project 3: Code&Spell */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('projects.codeAndSpell.title')}</h3>
                <p className="text-gray-600 mb-4">{t('projects.codeAndSpell.description')}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">TS</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">React</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Konva</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Monaco</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Laravel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t('contact.title')}</h2>
          <p className="text-blue-100 mb-8 text-lg">
            {t('contact.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/SspablosS" className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors font-medium flex items-center justify-center gap-2">
              <Github size={20} />
              {t('contact.github')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            {t('footer')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;