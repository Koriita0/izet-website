import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Clock, GraduationCap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContadorPrivadoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header fijo */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/seleccionIZET/IZET/logoIZET.jpg"//---------------------------------------------
                alt="IZET Logo"
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">IZET</h1>
                <p className="text-xs text-gray-600">
                  Instituto Zacatecano de Estudios Técnicos
                </p>
              </div>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-red-600 text-red-600 bg-transparent"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO con fondo oscuro */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Aquí tú cambias la ruta de la imagen de fondo */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/seleccionIZET/ContadorPrivado/contadorhero.jpg')",
          }}
        />
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
              Carrera Técnica en{" "}
              <span className="text-red-300">Contador Privado</span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-red-200 mb-4">
              RVOE: 01532CTCP240125
            </p>
            <p className="text-lg text-gray-100 leading-relaxed">
              Desarrolla una formación sólida en contabilidad y finanzas para el
              sector privado, con énfasis en la aplicación práctica en empresas
              y negocios reales.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Objetivo */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Objetivo de la carrera
              </h2>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed">
                  Formar técnicos en Contaduría Privada competentes para
                  registrar, analizar e interpretar la información financiera de
                  empresas y negocios, aplicando la normatividad vigente y el
                  uso de software contable. El egresado será capaz de apoyar en
                  la toma de decisiones económicas y fiscales, con sentido ético,
                  responsabilidad y orientación al servicio.
                </p>
              </div>
            </div>

            {/* Perfiles */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Perfiles de la carrera
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-red-100 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">
                      Perfil de ingreso
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Interés por las áreas económico–administrativas.</li>
                      <li>
                        • Habilidad básica para el razonamiento matemático y el
                        manejo de datos.
                      </li>
                      <li>
                        • Gusto por el trabajo organizado, el manejo de
                        documentos y reportes.
                      </li>
                      <li>
                        • Actitud responsable, honesta y con disposición para el
                        trabajo en equipo.
                      </li>
                      <li>
                        • Deseo de trabajar en empresas, despachos contables o
                        crear su propio negocio.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-100 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">
                      Perfil de egreso
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Registra operaciones contables y elabora estados
                        financieros básicos.
                      </li>
                      <li>
                        • Apoya en el cálculo de impuestos, nóminas y
                        obligaciones fiscales.
                      </li>
                      <li>
                        • Utiliza software contable y herramientas ofimáticas
                        para el control administrativo.
                      </li>
                      <li>
                        • Interpreta información financiera para apoyar la toma
                        de decisiones.
                      </li>
                      <li>
                        • Actúa con ética, confidencialidad y responsabilidad en
                        el manejo de información.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sobre la carrera */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sobre la carrera
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Una carrera técnica en Contador Privado proporciona a los
                estudiantes una formación sólida en contabilidad y finanzas,
                centrándose en aplicaciones prácticas para el sector privado. Se
                abordan temas como contabilidad financiera, contabilidad de
                costos, impuestos, auditoría y análisis financiero.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Los estudiantes también aprenden el uso de herramientas y
                software contable, así como habilidades de comunicación y
                resolución de problemas relacionados con asuntos financieros. El
                programa está orientado a la inserción rápida al mercado laboral
                y al desarrollo de proyectos de emprendimiento.
              </p>
            </div>

            {/* Plan de estudios */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Plan de estudios
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Primer semestre */}
                <Card className="bg-red-900 text-white rounded-3xl shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-900 text-sm font-semibold mb-4">
                      PRIMER SEMESTRE
                    </div>
                    <ul className="space-y-3 text-sm md:text-base">
                      <li className="border-b border-red-300 pb-1">
                        Lectura y Redacción
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Contabilidad I
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Economía
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Inglés I
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Computación I
                      </li>
                      <li>Matemáticas I</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Segundo semestre */}
                <Card className="bg-red-900 text-white rounded-3xl shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-900 text-sm font-semibold mb-4">
                      SEGUNDO SEMESTRE
                    </div>
                    <ul className="space-y-3 text-sm md:text-base">
                      <li className="border-b border-red-300 pb-1">
                        Contabilidad II
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Inglés II
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Metodología de la Investigación
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Emprendedurismo
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Matemáticas Financieras
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Administración
                      </li>
                      <li>Computación II</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Tercer semestre */}
                <Card className="bg-red-900 text-white rounded-3xl shadow-lg overflow-hidden">
                  <CardContent className="p-6">
                    <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-900 text-sm font-semibold mb-4">
                      TERCER SEMESTRE
                    </div>
                    <ul className="space-y-3 text-sm md:text-base">
                      <li className="border-b border-red-300 pb-1">
                        Mercadotecnia
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Contabilidad III
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Inglés III
                      </li>
                      <li className="border-b border-red-300 pb-1">
                        Matemáticas III
                      </li>
                      <li>Derecho Mercantil</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Modalidades / Duración / Validez */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Modalidades, duración y validez
              </h2>

              <div className="bg-red-900 rounded-3xl p-8 text-white mb-6">
                <h3 className="text-center text-2xl font-extrabold tracking-wide mb-6">
                  MODALIDADES
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-700 rounded-2xl p-6 shadow-lg">
                    <div className="inline-block px-4 py-1 bg-red-100 text-red-900 font-bold rounded-full mb-4">
                      SEMIESCOLARIZADO
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Estudia solo los sábados.
                      <br />
                      La carrera tiene una duración de{" "}
                      <span className="font-semibold">1 año 6 meses</span>.
                    </p>
                  </div>

                  <div className="bg-red-700 rounded-2xl p-6 shadow-lg">
                    <div className="inline-block px-4 py-1 bg-red-100 text-red-900 font-bold rounded-full mb-4">
                      ESCOLARIZADO
                    </div>
                    <p className="text-sm md:text-base leading-relaxed">
                      Estudia entre semana.
                      <br />
                      La carrera tiene una duración de{" "}
                      <span className="font-semibold">1 año 6 meses</span>.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-red-200">
                      Duración total
                    </p>
                    <p className="text-lg font-semibold">3 semestres</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-red-200">
                      Nivel
                    </p>
                    <p className="text-lg font-semibold">Carrera Técnica</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-red-200">
                      Validez
                    </p>
                    <p className="text-lg font-semibold">
                      Oficial SEP · RVOE 01532CTCP240125
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Campo laboral */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Campo laboral
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                <p className="text-gray-700 mb-4">
                  Como egresado de Contador Privado podrás desarrollarte en:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Despachos y firmas contables privadas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Empresas pequeñas, medianas y grandes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Instituciones financieras y comerciales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Dependencias de gobierno y sector público.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Asesoría fiscal y contable independiente.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Creación de tu propio despacho contable.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA final */}
            <div className="bg-red-600 text-white rounded-3xl p-8 text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para comenzar tu carrera como Contador Privado?
              </h3>
              <p className="mb-6">
                Contáctanos para más información sobre inscripciones, horarios y
                becas disponibles.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#contacto">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-red-600 hover:bg-gray-100"
                  >
                    Contactar ahora
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-red-700 bg-transparent"
                  >
                    Ver otras carreras
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
