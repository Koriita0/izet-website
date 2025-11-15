import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Clock, GraduationCap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function CriminologiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header superior con logo y botón volver */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/seleccionIZET/IZET/logoIZET.jpg"
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

      {/* HERO oscuro (puedes poner tu imagen de fondo en CSS) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black py-20">
        <div className="absolute inset-0 opacity-40 bg-[url('/seleccionIZET/Criminologia/crimi2.jpg')] bg-cover bg-center pointer-events-none" />//----------------------------------------------------
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Carrera Técnica en{" "}
              <span className="text-red-400">
                Criminología
              </span>
            </h1>
            <p className="text-lg font-semibold text-red-300 mb-2">
              RVOE: 08632CTC241011
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Fórmate como profesionista en la prevención, investigación y
              análisis de la criminalidad, con un enfoque práctico y orientado
              a la seguridad pública y la justicia penal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Objetivo */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Objetivo de la carrera
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Formar técnicos en criminología capaces de intervenir en la
                prevención, análisis y atención de conductas delictivas y
                situaciones de riesgo, mediante conocimientos teóricos y
                prácticos en psicología, derecho, seguridad pública y
                procedimientos periciales. El egresado contará con herramientas
                para colaborar en instituciones de seguridad, procuración de
                justicia y programas de prevención del delito.
              </p>
            </div>

            {/* Perfiles */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Perfil de ingreso */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  Perfil de ingreso
                </h3>
                <p className="text-gray-700 mb-3">
                  Está dirigido a personas interesadas en la seguridad pública,
                  el estudio del comportamiento humano y el análisis de
                  conductas delictivas.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Interés por temas de justicia, legalidad y derechos humanos.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Habilidad para la observación, el análisis y la resolución de
                    problemas.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Disposición para el trabajo en equipo y manejo responsable
                    de información sensible.
                  </li>
                </ul>
              </div>

              {/* Perfil de egreso */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  Perfil de egreso
                </h3>
                <p className="text-gray-700 mb-3">
                  Al finalizar la carrera, el egresado podrá incorporarse a
                  instituciones relacionadas con la seguridad, la prevención y
                  la justicia.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Aplica técnicas básicas de criminología, psicología y
                    derecho penal en contextos reales.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Participa en programas de prevención del delito y atención
                    a víctimas.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Colabora en la elaboración de reportes, perfiles y análisis
                    de situaciones de riesgo.
                  </li>
                </ul>
              </div>
            </div>

            {/* PLAN DE ESTUDIOS – mismos colores que Contador Privado */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Plan de estudios
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                {/* 1er semestre */}
                <Card className="bg-red-900 text-white border-none shadow-lg rounded-3xl">
                  <CardContent className="p-5">
                    <div className="inline-block px-4 py-1 rounded-full bg-red-700 text-white text-xs font-semibold mb-4">
                      PRIMER SEMESTRE
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="border-t border-red-600 pt-2">
                        Introducción a la psicología
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Introducción al Estudio del Derecho
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Primeros Auxilios
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Acondicionamiento Físico
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Defensa Personal
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 2º semestre */}
                <Card className="bg-red-900 text-white border-none shadow-lg rounded-3xl">
                  <CardContent className="p-5">
                    <div className="inline-block px-4 py-1 rounded-full bg-red-700 text-white text-xs font-semibold mb-4">
                      SEGUNDO SEMESTRE
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="border-t border-red-600 pt-2">
                        Desarrollo Humano
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Psicología de la Personalidad
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Radiocomunicación
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Procedimiento Penal
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Derecho Penal
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 3er semestre */}
                <Card className="bg-red-900 text-white border-none shadow-lg rounded-3xl">
                  <CardContent className="p-5">
                    <div className="inline-block px-4 py-1 rounded-full bg-red-700 text-white text-xs font-semibold mb-4">
                      TERCER SEMESTRE
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="border-t border-red-600 pt-2">
                        Criminología
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Táctica Policial
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Disciplina de Orden Cerrado
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Cartografía y Orientación
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Psicología Social
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* 4º semestre */}
                <Card className="bg-red-900 text-white border-none shadow-lg rounded-3xl">
                  <CardContent className="p-5">
                    <div className="inline-block px-4 py-1 rounded-full bg-red-700 text-white text-xs font-semibold mb-4">
                      CUARTO SEMESTRE
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="border-t border-red-600 pt-2">
                        Simulacro y Evacuación
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Trabajo en Equipo
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Metodología de la Investigación
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Protección Civil
                      </li>
                      <li className="border-t border-red-600 pt-2">
                        Derechos Humanos
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Duración / Modalidad / Validez – mismos colores que Contador Privado */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Información general
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <Card className="bg-red-900 text-white border-none rounded-2xl shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-10 h-10 mx-auto mb-3" />
                    <h3 className="font-bold mb-1">Duración</h3>
                    <p className="text-sm">4 semestres (2 años)</p>
                  </CardContent>
                </Card>

                <Card className="bg-red-900 text-white border-none rounded-2xl shadow-lg">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="w-10 h-10 mx-auto mb-3" />
                    <h3 className="font-bold mb-1">Modalidad</h3>
                    <p className="text-sm">
                      Escolarizado y semiescolarizado
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-red-900 text-white border-none rounded-2xl shadow-lg">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-10 h-10 mx-auto mb-3" />
                    <h3 className="font-bold mb-1">Validez</h3>
                    <p className="text-sm">RVOE Oficial SEP</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Modalidades de estudio – mismo estilo de tarjetas rojas */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Modalidades de estudio
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Semiescolarizado */}
                <Card className="bg-red-900 text-white border-none rounded-3xl shadow-xl">
                  <CardContent className="p-8">
                    <div className="inline-block px-5 py-1 rounded-full bg-red-700 text-xs font-semibold mb-4">
                      SEMIESCOLARIZADO
                    </div>
                    <p className="text-sm leading-relaxed">
                      Estudia solo los sábados. La carrera tiene una duración
                      de <span className="font-semibold">2 años</span>, ideal
                      para quienes trabajan o requieren un horario flexible.
                    </p>
                  </CardContent>
                </Card>

                {/* Escolarizado */}
                <Card className="bg-red-900 text-white border-none rounded-3xl shadow-xl">
                  <CardContent className="p-8">
                    <div className="inline-block px-5 py-1 rounded-full bg-red-700 text-xs font-semibold mb-4">
                      ESCOLARIZADO
                    </div>
                    <p className="text-sm leading-relaxed">
                      Estudia de lunes a viernes en horario regular. La carrera
                      tiene una duración de{" "}
                      <span className="font-semibold">2 años</span>, con
                      acompañamiento cercano de tus docentes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Campo laboral */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Campo laboral
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 mb-4">
                  Como egresado de la carrera técnica en Criminología podrás
                  desempeñarte en:
                </p>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Instituciones de seguridad pública y policía preventiva.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Áreas de prevención del delito y programas comunitarios.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Dependencias de procuración e impartición de justicia.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Centros de atención a víctimas y apoyo psicosocial.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Empresas de seguridad privada y análisis de riesgos.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                    Consultoría independiente en temas de prevención y
                    seguridad.
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA final */}
            <div className="bg-red-900 text-white rounded-3xl p-8 text-center shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para iniciar tu formación en Criminología?
              </h3>
              <p className="mb-6">
                Acércate a IZET y conoce los requisitos de inscripción, horarios
                y becas disponibles.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#contacto">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-red-700 hover:bg-gray-100"
                  >
                    Solicitar información
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-red-800 bg-transparent"
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
