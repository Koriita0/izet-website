import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Clock, Phone, Mail, MapPin, CheckCircle, Building, Users, Globe } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                Transforma tu Futuro con <span className="text-[color:var(--primary)]">Educación Técnica</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                En IZET formamos profesionales técnicos altamente calificados, listos para enfrentar los desafíos del
                mundo laboral con excelencia y compromiso.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/inscripcion">
                  <Button size="lg" className="bg-[color:var(--primary)] hover:brightness-90 text-white">
                    Inscríbete Ahora
                  </Button>
                </Link>
                <Link href="/preparatoria">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-[color:var(--secondary)] bg-transparent"
                  >
                    Ver Programas
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/campus/IMG-20251021-WA0027.jpg"
                alt="Campus IZET"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-2xl object-cover aspect-[16/9]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Carreras (placeholders) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--foreground)] mb-4">Galería de Carreras</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Espacios reservados para fotografías de cada programa — reemplaza las imágenes cuando quieras.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[color:var(--muted)] rounded-lg p-6 overflow-hidden">
              <Image
                src="/images/campus/IMG-20251021-WA0047.jpg"
                alt="Curso Belleza Integral"
                width={300}
                height={225}
                className="w-full rounded-md mb-4 object-cover aspect-[4/3]"
              />
              <h3 className="font-bold text-[color:var(--foreground)] mb-2">Belleza Integral</h3>
              <p className="text-sm text-gray-600">Formación en estilismo, maquillaje, uñas y estética.</p>
            </div>

            <div className="bg-[color:var(--muted)] rounded-lg p-6 overflow-hidden">
              <Image
                src="/images/campus/IMG-20251021-WA0082.jpg"
                alt="Barbería Profesional"
                width={300}
                height={225}
                className="w-full rounded-md mb-4 object-cover aspect-[4/3]"
              />
              <h3 className="font-bold text-[color:var(--foreground)] mb-2">Barbero Profesional</h3>
              <p className="text-sm text-gray-600">Técnicas de corte y arreglo de barba con enfoque profesional.</p>
            </div>

            <div className="bg-[color:var(--muted)] rounded-lg p-6 overflow-hidden">
              <Image
                src="/images/campus/IMG-20251021-WA0049.jpg"
                alt="Idioma Inglés"
                width={300}
                height={225}
                className="w-full rounded-md mb-4 object-cover aspect-[4/3]"
              />
              <h3 className="font-bold text-[color:var(--foreground)] mb-2">Idioma Inglés</h3>
              <p className="text-sm text-gray-600">Cursos intensivos y carrera técnica para dominar el idioma.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[color:var(--primary)] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-red-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-red-100">Programas Educativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-red-100">Egresados Exitosos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-red-100">Validez Oficial</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - redesigned like the example site */}
      <section id="nosotros" className="py-20 bg-[color:var(--secondary)]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--foreground)] mb-4">Sobre IZET — Instituto Zacatecano de Estudios Técnicos</h2>
              <p className="text-gray-700 mb-4">Fundado para ofrecer formación técnica con validez oficial, IZET combina formación práctica y acompañamiento académico para jóvenes y adultos en Zacatecas. Nuestro objetivo es formar profesionistas listos para el mercado laboral local y regional.</p>

              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Ubicación:</strong> Zacatecas, México — campus accesible y con transporte cercano.</li>
                <li><strong>Validez:</strong> Programas con registro oficial y constancias al finalizar cursos técnicos.</li>
                <li><strong>Modalidad:</strong> Presencial con horarios flexibles y cursos intensivos.</li>
              </ul>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Building className="w-6 h-6 text-[color:var(--primary)]" />
                    <div>
                      <h4 className="font-semibold">Instalaciones</h4>
                      <p className="text-sm text-gray-600">Aulas, talleres y laboratorios adaptados para formación técnica.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-[color:var(--primary)]" />
                    <div>
                      <h4 className="font-semibold">Docencia</h4>
                      <p className="text-sm text-gray-600">Equipo docente con experiencia en la industria y pedagogía práctica.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-[color:var(--primary)]" />
                    <div>
                      <h4 className="font-semibold">Orientación Laboral</h4>
                      <p className="text-sm text-gray-600">Bolsa de trabajo y vinculación con empresas locales.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[color:var(--primary)]" />
                    <div>
                      <h4 className="font-semibold">Certificación</h4>
                      <p className="text-sm text-gray-600">Constancias y certificaciones tras la conclusión de cursos y carreras.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/campus/IMG-20251021-WA0049.jpg"
                alt="Campus IZET - Sobre Nosotros"
                width={600}
                height={400}
                className="w-full aspect-[16/9] rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-lg p-8 shadow-sm">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Nuestra Misión</h3>
                <p className="text-sm text-gray-700">Formar técnicos profesionales con aptitudes prácticas y éticas, capaces de integrarse al mercado laboral con liderazgo y responsabilidad.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Nuestra Visión</h3>
                <p className="text-sm text-gray-700">Ser referente regional en formación técnica, promoviendo el desarrollo social y económico mediante educación de calidad.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Valores</h3>
                <p className="text-sm text-gray-700">Compromiso, Responsabilidad, Inclusión y Excelencia.</p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
              <div>
                <h4 className="font-semibold mb-3">Historia breve</h4>
                <p className="text-gray-700 text-sm">IZET nace para responder a la necesidad de formación técnica en Zacatecas, ofreciendo programas prácticos con orientación laboral desde sus primeros ciclos. A lo largo de los años, hemos consolidado vínculos con empresas locales y actualizado nuestros planes para adaptarlos a las demandas del mercado.</p>
              </div>
              <div>
              <h4 className="font-semibold mb-3">Ubicación</h4>
              <p className="text-gray-700 text-sm mb-4">Zacatecas, México. Campus con acceso cercano a transporte público y servicios.</p>
              <Image
                src="/images/campus/IMG-20251021-WA0075.jpg"
                alt="Ubicación Campus IZET"
                width={400}
                height={300}
                className="w-full aspect-[4/3] rounded-md object-cover"
              />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview - expanded with image/text variations */}
      <section className="py-20 bg-[color:var(--secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--foreground)] mb-4">Nuestros Programas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Programas pensados para ofrecerte habilidades prácticas y salida laboral inmediata. Elige la ruta que mejor se adapte a tus intereses: carreras técnicas, preparatoria con enfoque práctico o cursos intensivos.</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Program card - image left, text right */}
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div>
              <Image
                src="/images/campus/IMG-20251021-WA0050.jpg"
                alt="Programa Belleza Integral"
                width={400}
                height={300}
                className="w-full aspect-[4/3] rounded-lg object-cover"
              />
            </div>
              <div>
                <h3 className="text-2xl font-bold text-[color:var(--foreground)] mb-3">Belleza Integral — Formación práctica y certificada</h3>
                <p className="text-gray-700 mb-4">Programa líder en estilismo, maquillaje profesional, alaciado, colorimetría, extensiones de pestaña y uñas. Duración típica: 3 meses por curso. Al completar, recibes constancia oficial del instituto y portafolio práctico.</p>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                  <li>Curso de Corte y Estilismo</li>
                  <li>Colorimetría y alaciado</li>
                  <li>Maquillaje y automaquillaje</li>
                  <li>Extensiones de pestaña y diseño de cejas</li>
                </ul>
                <div className="flex gap-4">
                  <Link href="/carreras/belleza-integral"><Button className="bg-[color:var(--primary)] text-white">Más sobre Belleza</Button></Link>
                  <Button variant="outline">Solicitar Info</Button>
                </div>
              </div>
            </div>

            {/* Program card - image right, text left, guinda background strip */}
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="md:pr-8">
                <h3 className="text-2xl font-bold text-white mb-3">Idioma Inglés — Curso Intensivo</h3>
                <p className="text-white mb-4">Curso intensivo de 8 meses diseñado para dominar el idioma con enfoque comunicativo y prácticas reales. Ideal para quienes buscan mejorar su empleabilidad y acceder a oportunidades internacionales.</p>
                <ul className="list-disc pl-5 text-white mb-4">
                  <li>Clases presenciales y prácticas conversacionales</li>
                  <li>Material didáctico actualizado</li>
                  <li>Evaluación y seguimiento personalizado</li>
                </ul>
                <div className="flex gap-4">
                  <Link href="/carreras/idioma-ingles"><Button className="bg-white text-[color:var(--primary)]">Ver curso</Button></Link>
                  <Button variant="outline" className="text-white border-white">Inscribirme</Button>
                </div>
              </div>
              <div>
                <Image
                  src="/images/campus/IMG-20251021-WA0054.jpg"
                  alt="Curso Inglés Intensivo"
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Program card - image left, text right */}
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div>
                <Image
                  src="/images/campus/IMG-20251021-WA0055.jpg"
                  alt="Barbería Profesional"
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[color:var(--foreground)] mb-3">Barbero Profesional — Técnicas y emprendimiento</h3>
                <p className="text-gray-700 mb-4">Formación práctica en corte, arreglo de barba y atención al cliente. Incluye módulos sobre manejo del negocio y servicio al cliente para quienes quieren emprender su propia barbería.</p>
                <div className="flex gap-4">
                  <Link href="/carreras/barbero-profesional"><Button className="bg-[color:var(--primary)] text-white">Más información</Button></Link>
                  <Button variant="outline">Solicitar asesoría</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos y Talleres - detallado con alternancia imagen/texto y fondos guinda */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[color:var(--foreground)] mb-3">Cursos y Talleres</h2>
            <p className="text-gray-600">Cursos cortos diseñados para que desarrolles habilidades concretas y obtengas una constancia al finalizar. Perfectos si buscas aprender rápido y empezar a trabajar.</p>
          </div>

          {/* Beauty courses - guinda background, image left */}
          <div className="grid md:grid-cols-2 items-center gap-8 bg-[color:var(--primary)] text-white rounded-lg p-8">
            <div className="order-1 md:order-none">
              <Image
                src="/images/campus/IMG-20251021-WA0056.jpg"
                alt="Cursos de Belleza"
                width={400}
                height={300}
                className="w-full aspect-[4/3] rounded-md object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Cursos de Belleza — 3 meses</h3>
              <p className="mb-4">Ofrecemos cursos prácticos en:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Alaciado profesional</li>
                <li>Colorimetría y técnicas de teñido</li>
                <li>Extensiones de pestaña y diseño de ceja</li>
                <li>Corte y estilismo básico</li>
                <li>Maquillaje y automaquillaje</li>
                <li>Uñas y manicura profesional</li>
              </ul>
              <p className="mb-4">Duración: 3 meses. Incluye prácticas en laboratorio y constancia institucional al completar.</p>
              <div className="flex gap-4">
                <Button className="bg-white text-[color:var(--primary)]">Ver Horarios</Button>
                <Button variant="outline" className="border-white text-white">Inscríbete</Button>
              </div>
            </div>
          </div>

          {/* English intensive - image right, neutral background */}
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[color:var(--foreground)] mb-3">Curso Intensivo de Inglés — 8 meses</h3>
              <p className="text-gray-700 mb-4">Programa intensivo estructurado en módulos con evaluación continua. Ideal para quienes buscan dominar el idioma en un periodo concentrado y mejorar su CV.</p>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li>Enfoque en comunicación oral y escrita</li>
                <li>Prácticas con hablantes nativos y talleres de conversación</li>
                <li>Material y seguimiento personalizado</li>
              </ul>
              <div className="flex gap-4">
                <Button className="bg-[color:var(--primary)] text-white">Inscribirme</Button>
                <Button variant="outline">Solicitar Info</Button>
              </div>
            </div>
            <div>
              <Image
                src="/images/campus/IMG-20251021-WA0066.jpg"
                alt="Inglés Intensivo"
                width={400}
                height={300}
                className="w-full aspect-[4/3] rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Workshops & special modules - image left */}
          <div className="grid md:grid-cols-2 items-center gap-8 bg-white rounded-lg p-8">
            <div>
              <Image
                src="/images/campus/IMG-20251021-WA0074.jpg"
                alt="Talleres y Certificaciones"
                width={400}
                height={300}
                className="w-full aspect-[4/3] rounded-lg object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Talleres Especiales y Certificaciones</h3>
              <p className="text-gray-700 mb-4">Ofrecemos talleres prácticos de fin de semana y certificaciones complementarias que fortalecen tu perfil profesional, como atención al cliente, gestión de redes sociales para emprendimientos, y herramientas digitales para pequeñas empresas.</p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Taller de emprendimiento para salones y barberías</li>
                <li>Redes sociales y portafolio digital</li>
                <li>Atención y fidelización de clientes</li>
              </ul>
              <div className="flex gap-4">
                <Button className="bg-[color:var(--primary)] text-white">Ver Talleres</Button>
                <Button variant="outline">Solicitar Taller</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
              <p className="text-lg text-gray-600">Estamos aquí para resolver todas tus dudas</p>
            </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Teléfono</h3>
                  <div className="text-[color:var(--primary)] space-y-1">
                    <a href="tel:4922952643" className="hover:underline block">492 295 2643</a>
                    <a href="tel:4929421363" className="hover:underline block">492 942 1363</a>
                    <a href="tel:4922024303" className="hover:underline block">492 202 4303</a>
                    <a href="tel:4921307131" className="hover:underline block">492 130 7131</a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:contacto@izet.edu.mx" className="text-red-600 hover:underline">
                    contacto@izet.edu.mx
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Ubicación</h3>
                  <p className="text-gray-600 text-sm">Zacatecas, México</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Programa de Interés</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                    <option>Selecciona una opción</option>
                    <option>Preparatoria</option>
                    <option>Belleza Integral</option>
                    <option>Asistente Educativo</option>
                    <option>Barbero Profesional</option>
                    <option>Contador Privado</option>
                    <option>Criminología</option>
                    <option>Idioma Inglés</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
