"use client";


import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  GraduationCap,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"





export default function AsistenteEducativoPage() {
  const fotosGaleria = [
    "IMG-20251024-WA0015",
    "IMG-20251024-WA0043",
    "IMG-20251107-WA0097",
    "IMG-20251107-WA0098",
    "IMG-20251107-WA0099",
  ]


  const planEstudios = [
    {
      titulo: "Primer semestre",
      materias: [
        "Psicología infantil",
        "Estimulación temprana",
        "Cantos y juegos infantiles",
        "Material didáctico",
      ],
    },
    {
      titulo: "Segundo semestre",
      materias: [
        "Literatura infantil",
        "Teatro infantil",
        "Lectura y redacción",
        "Organización de CENDIS",
      ],
    },
    {
      titulo: "Tercer semestre",
      materias: [
        "Análisis de programas",
        "Técnicas de la investigación",
        "Relaciones humanas",
        "Asesoría de tesis o memo de SS didáctico",
      ],
    },
    {
      titulo: "Cuarto semestre",
      materias: [
        "Historia de la educación en México",
        "Primeros auxilios",
        "Puericultura",
        "Higiene escolar",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Barra superior */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
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

      {/* HERO */}
      <section className="bg-gradient-to-br from-red-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-center max-w-6xl mx-auto">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                Carrera Técnica en{" "}
                <span className="text-red-700">Asistente Educativo</span>
              </h1>
              <p className="text-lg text-red-700 font-semibold mb-2">
                RVOE: 00332CTAE240125
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Una carrera pensada para quienes desean acompañar el desarrollo
                integral de niñas y niños en edad preescolar y primaria,
                combinando el cuidado, la educación y el juego como herramientas
                principales de aprendizaje.
              </p>
            </div>

            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/seleccionIZET/AsistenteEducativo/portada.jpg"
                alt="Asistente educativo trabajando con niños"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPCIÓN / OBJETIVO */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr] items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Objetivo de la carrera
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Formar técnicos en asistente educativo capaces de colaborar con
                maestras y educadores en el cuidado y educación de niñas y niños
                en edad preescolar y primaria. Durante la carrera se abordan
                temas como desarrollo infantil, planificación de actividades
                educativas, salud y seguridad infantil, comunicación efectiva
                con niñas, niños y familias, así como técnicas para el manejo de
                comportamiento.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La formación incluye también observación y evaluación del
                desarrollo infantil, enseñanza inclusiva para niñas y niños con
                necesidades especiales, prácticas de enseñanza en áreas como
                matemáticas, ciencias y artes, además de ética profesional en el
                trabajo con la niñez. El estudiantado participa en prácticas de
                campo para aplicar lo aprendido en situaciones reales de trabajo
                con niños.
              </p>
            </div>

            <Card className="bg-[#f2d8d8] border-none shadow-lg">
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <div>
                  <GraduationCap className="w-10 h-10 text-red-700 mb-3" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ¿A quién va dirigida?
                  </h3>
                  <p className="text-gray-800 mb-4">
                    A personas con vocación de servicio, sensibilidad y gusto
                    por trabajar con niñas y niños, que buscan una formación
                    técnica con enfoque humano y alta empleabilidad.
                  </p>
                </div>
                <p className="text-sm text-red-900 font-medium">
                  Duración total:{" "}
                  <span className="font-bold">2 años / 4 semestres</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PERFILES */}
            {/* PERFILES */}
      <section className="py-16 bg-red-50/60">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Perfiles de la carrera
          </h2>

          {/* Dos columnas: ingreso / egreso */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Perfil de ingreso */}
            <Card className="border-red-100 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Perfil de ingreso
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>Gusto por trabajar con niñas y niños.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Actitud responsable, paciente y respetuosa hacia la
                      infancia y las familias.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Interés por la educación, el juego y las actividades
                      creativas.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Disposición para el trabajo en equipo y la comunicación
                      asertiva.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Perfil de egreso */}
            <Card className="border-red-100 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Perfil de egreso
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Apoya la planeación y desarrollo de actividades educativas
                      y lúdicas para la infancia.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Identifica etapas del desarrollo infantil y favorece
                      ambientes seguros y afectivos.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Colabora con docentes y familias en estrategias de
                      comunicación y apoyo educativo.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <span>
                      Aplica principios de ética profesional y respeto a los
                      derechos de la niñez.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Tarjeta explicativa inferior */}
          <Card className="border-dashed border-red-200 bg-white/70">
            <CardContent className="p-6 text-center">
              <p className="text-gray-700">
                A lo largo de la carrera desarrollarás competencias humanas y
                técnicas que te permitirán integrarte de forma profesional en
                diferentes espacios dedicados al cuidado y educación de niñas y
                niños.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* PLAN DE ESTUDIOS */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Plan de estudios
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {planEstudios.map((semestre) => (
              <Card
                key={semestre.titulo}
                className="bg-[#f1d3d3] border-none shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform"
              >
                <CardContent className="p-5">
                  <div className="inline-block px-4 py-1 rounded-full bg-red-700 text-white text-xs font-semibold mb-4">
                    {semestre.titulo.toUpperCase()}
                  </div>
                  <ul className="space-y-2 text-sm text-gray-800">
                    {semestre.materias.map((m) => (
                      <li key={m} className="border-b border-red-200/60 pb-1">
                        {m}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-16 bg-red-50/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-6 gap-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Galería de prácticas y actividades
            </h2>
            <span className="text-xs md:text-sm text-red-700 font-semibold uppercase tracking-wide">
              Vida estudiantil IZET
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {fotosGaleria.map((foto) => (
              <div
                key={foto}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 group shadow-sm"
              >
                <Image
                  src={`/seleccionIZET/AsistenteEducativo/${foto}.jpg`}
                  alt={`Galería Asistente Educativo - ${foto}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODALIDADES + DURACIÓN Y VALIDEZ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Modalidades de estudio
            </h2>
            <p className="text-gray-600">
              Elige la opción que mejor se adapte a tu ritmo de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#f1d3d3] border-none shadow-md">
              <CardContent className="p-8 text-center">
                <div className="inline-block bg-red-700 text-white px-6 py-1 rounded-full text-sm font-semibold mb-6">
                  SEMIESCOLARIZADO
                </div>
                <p className="text-gray-800 mb-1">
                  Estudia solo los sábados.
                </p>
                <p className="text-gray-800">
                  La carrera tiene una duración de 2 años.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#f1d3d3] border-none shadow-md">
              <CardContent className="p-8 text-center">
                <div className="inline-block bg-red-700 text-white px-6 py-1 rounded-full text-sm font-semibold mb-6">
                  ESCOLARIZADO
                </div>
                <p className="text-gray-800 mb-1">Estudia entre semana.</p>
                <p className="text-gray-800">
                  La carrera tiene una duración de 2 años.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-red-100">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Duración</h3>
                <p className="text-gray-700">
                  2 años <span className="block text-sm">(4 semestres)</span>
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-100">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Modalidades</h3>
                <p className="text-gray-700">
                  Escolarizado y semiescolarizado.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-100">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">Validez oficial</h3>
                <p className="text-gray-700">
                  RVOE: 00332CTAE240125
                  <span className="block text-sm">
                    Reconocida por la SEP.
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CAMPO LABORAL */}
      <section className="py-16 bg-red-50/70">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Campo laboral
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <p className="text-gray-700 mb-6">
              Al egresar de la carrera técnica en Asistente Educativo podrás
              desempeñarte en distintos espacios dedicados a la atención y
              educación de la primera infancia:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Guarderías y estancias infantiles.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Jardines de niños.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Centros de desarrollo infantil y CENDIS.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ludotecas y centros lúdicos.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Atención y cuidado infantil privado.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Emprendimiento de tu propia estancia infantil.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-red-700 text-white rounded-3xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para comenzar tu carrera como Asistente Educativo?
            </h3>
            <p className="mb-6">
              Comunícate con nosotros para conocer promociones, horarios y
              proceso de inscripción.
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
      </section>

      <Footer />
    </div>
  )
}
