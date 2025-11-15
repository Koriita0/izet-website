import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Clock, GraduationCap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function IdiomaInglesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Barra fija superior con logo + volver */}
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

      {/* HERO con imagen de fondo (cámbiala aquí) */}
      <section
        className="relative py-20 md:py-28 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url('/seleccionIZET/IdiomaIngles/ingles1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase mb-3 text-red-300">
              Carrera técnica
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
              Carrera Técnica en{" "}
              <span className="text-red-300">el Idioma Inglés</span>
            </h1>
            <p className="text-lg font-semibold text-red-200 mb-4">
              RVOE: 00432CTII240125
            </p>
            <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl">
              Desarrolla habilidades sólidas en comprensión y expresión oral y
              escrita en inglés, con una formación integral que combina
              gramática, cultura y comunicación aplicada a la vida profesional.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Objetivo */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Objetivo de la carrera
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Formar técnicos en el idioma inglés capaces de comunicarse de
                manera efectiva en contextos académicos, laborales y sociales.
                El programa fortalece las habilidades de comprensión auditiva,
                expresión oral, lectura y escritura, al mismo tiempo que
                introduce al estudiante a la cultura y la literatura
                angloparlante, preparando profesionistas que puedan desempeñarse
                en ámbitos educativos, turísticos, empresariales y de
                comunicación.
              </p>
            </section>

            {/* Perfiles */}
            <section className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Perfil de ingreso
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>Interés por los idiomas y la comunicación.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Disposición para participar en actividades orales y de
                      lectura.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Habilidades básicas de comprensión lectora en español.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Interés por conocer otras culturas y contextos
                      internacionales.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>Responsabilidad y compromiso con el estudio.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-red-700 mb-3">
                  Perfil de egreso
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Se comunica en inglés de forma oral y escrita en niveles
                      principiante, básico, intermedio y avanzado.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Comprende textos, conversaciones y materiales auténticos
                      relacionados con la vida cotidiana y el ámbito laboral.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Aplica el idioma inglés en contextos de servicio,
                      atención al cliente, turismo y negocios.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Demuestra respeto intercultural y uso responsable del
                      idioma en distintos entornos.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Está preparado para continuar estudios de nivel superior o
                      certificaciones de dominio del idioma.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Plan de estudios */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Plan de estudios
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                {/* Nivel Principiante */}
                <Card className="bg-red-800 text-white shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <div className="inline-flex px-4 py-1 rounded-full bg-red-600 text-xs font-semibold tracking-wide mb-4">
                      NIVEL PRINCIPIANTE
                    </div>
                    <ul className="space-y-2 text-sm md:text-base">
                      <li>Expresión Oral I</li>
                      <li>Expresión Escrita I</li>
                      <li>Comprensión Auditiva I</li>
                      <li>Comprensión de Lectura I</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Nivel Básico */}
                <Card className="bg-red-800 text-white shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <div className="inline-flex px-4 py-1 rounded-full bg-red-600 text-xs font-semibold tracking-wide mb-4">
                      NIVEL BÁSICO
                    </div>
                    <ul className="space-y-2 text-sm md:text-base">
                      <li>Expresión Oral II</li>
                      <li>Expresión Escrita II</li>
                      <li>Comprensión Auditiva II</li>
                      <li>Comprensión de Lectura II</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Nivel Intermedio */}
                <Card className="bg-red-800 text-white shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <div className="inline-flex px-4 py-1 rounded-full bg-red-600 text-xs font-semibold tracking-wide mb-4">
                      NIVEL INTERMEDIO
                    </div>
                    <ul className="space-y-2 text-sm md:text-base">
                      <li>Expresión Oral III</li>
                      <li>Expresión Escrita III</li>
                      <li>Comprensión Auditiva III</li>
                      <li>Comprensión de Lectura III</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Nivel Avanzado */}
                <Card className="bg-red-800 text-white shadow-md rounded-2xl">
                  <CardContent className="p-6">
                    <div className="inline-flex px-4 py-1 rounded-full bg-red-600 text-xs font-semibold tracking-wide mb-4">
                      NIVEL AVANZADO
                    </div>
                    <ul className="space-y-2 text-sm md:text-base">
                      <li>Expresión Oral IV</li>
                      <li>Expresión Escrita IV</li>
                      <li>Comprensión Auditiva IV</li>
                      <li>Comprensión de Lectura IV</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Modalidades de estudio */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Modalidades de estudio
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gray-100 border-0 shadow-md rounded-3xl overflow-hidden">
                  <div className="bg-red-700 text-white text-center py-3 text-sm font-bold tracking-wide">
                    SEMIESCOLARIZADO
                  </div>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-800">
                      Estudia solo los sábados.
                      <br />
                      La carrera tiene una duración aproximada de 2 años.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-100 border-0 shadow-md rounded-3xl overflow-hidden">
                  <div className="bg-red-700 text-white text-center py-3 text-sm font-bold tracking-wide">
                    ESCOLARIZADO
                  </div>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-800">
                      Estudia entre semana.
                      <br />
                      La carrera tiene una duración aproximada de 2 años.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Duración, modalidad general y validez */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Duración y validez
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-red-100">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 text-red-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-1">Duración</h3>
                    <p className="text-gray-700">4 niveles (aprox. 2 años)</p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-red-100">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="w-12 h-12 text-red-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-1">
                      Modalidades
                    </h3>
                    <p className="text-gray-700">
                      Escolarizado y semiescolarizado
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-red-100">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-1">Validez</h3>
                    <p className="text-gray-700">
                      Validez oficial RVOE 00432CTII240125
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Campo laboral */}
            <section className="mb-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Campo laboral
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Como egresado de la Carrera Técnica en Idioma Inglés podrás
                  desempeñarte en:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Centros de enseñanza del inglés y apoyo escolar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Empresas con contacto internacional y áreas de atención al
                      cliente.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Turismo, hotelería y servicios para visitantes
                      extranjeros.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Medios de comunicación, call centers y comercio
                      electrónico.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Trabajo independiente como instructor o asesor de inglés.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="bg-red-700 text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Listo para comenzar tu formación en el Idioma Inglés?
                </h3>
                <p className="mb-6">
                  Acércate a IZET y solicita información sobre requisitos,
                  horarios y proceso de inscripción.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/#contacto">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-red-700 hover:bg-gray-100"
                    >
                      Contactar ahora
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
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
