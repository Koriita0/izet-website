import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function InscripcionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Proceso de <span className="text-red-600">Inscripción</span>
            </h1>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              Tenemos inscripciones abiertas y puedes apartar tu lugar desde ya
            </p>
            <p className="text-lg text-red-600 font-semibold">
              IZET apuesta por la educación personalizada - Máximo 15 alumnos por salón
            </p>
          </div>
        </div>
      </section>

      {/* Process Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src="/images/design-mode/image.png"
              alt="Proceso de Inscripción"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Documentación Requerida</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2 border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Acta de Nacimiento</h3>
                      <p className="text-sm text-gray-600">Original y copia certificada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Certificado de Secundaria</h3>
                      <p className="text-sm text-gray-600">Original y copia (o constancia de estudios)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">CURP</h3>
                      <p className="text-sm text-gray-600">Copia actualizada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">4 Fotografías</h3>
                      <p className="text-sm text-gray-600">Tamaño infantil, blanco y negro</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-100 md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Pago de Inscripción</h3>
                      <p className="text-sm text-gray-600">Consultar costos y formas de pago disponibles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-12">
              <h3 className="font-bold text-gray-900 mb-3">Nota Importante</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Inscríbete ya y no pierdas esta increíble oportunidad de formar parte de nuestro INSTITUTO. Solo habrá
                un máximo de 15 alumnos por salón para garantizar una educación personalizada y de calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageCircle className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Inscribirte?</h2>
            <p className="text-xl mb-8 text-red-100">
              Contáctanos por WhatsApp para iniciar tu proceso de inscripción y resolver todas tus dudas
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/524922952643?text=Hola,%20me%20interesa%20inscribirme%20en%20IZET"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </a>
              <a href="tel:4922952643">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-red-700 bg-transparent">
                  Llamar: 492 295 2643
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Horarios Disponibles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-100">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Turno Matutino</h3>
                  <p className="text-gray-600 text-lg">8:00 AM - 2:00 PM</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-100">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Turno Vespertino</h3>
                  <p className="text-gray-600 text-lg">2:00 PM - 8:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
