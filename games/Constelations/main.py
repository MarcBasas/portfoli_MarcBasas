import pygame
import random
import time
import math
import asyncio

# Inicializar pygame
pygame.init()

# Configuración de la pantalla
ANCHO = 1024
ALTO = 576
ALTO_PANEL = int(ALTO * 0.1)  # 10% del alto para el panel
ALTO_JUEGO = ALTO  # Todo el alto disponible para el juego

pantalla = pygame.display.set_mode((ANCHO, ALTO))
pygame.display.set_caption("Constelations")

# Colores
GRIS_OSCURO = (40, 40, 40)
GRIS_PANEL = (45, 45, 45)
BEIGE = (245, 245, 220)
TRAPECIO_COLOR = (65, 65, 65)

# Velocidad fija para todos los puntos
VELOCIDAD = 0.5
VELOCIDAD_MIN = 0.5
VELOCIDAD_MAX = 10.0

# Configuración de puntos
NUMERO_PUNTOS = 40
NUMERO_PUNTOS_MIN = 10
NUMERO_PUNTOS_MAX = 100

# Configuración de las líneas
DISTANCIA_MAXIMA = 100  # Distancia máxima para dibujar una línea
DISTANCIA_MIN = 50
DISTANCIA_MAX = 300
OPACIDAD_LINEA = 50    # Opacidad de las líneas (0-255)

# Estado del panel
panel_visible = True
# Dimensiones del trapecio
TRAPECIO_BASE_MAYOR = 40
TRAPECIO_BASE_MENOR = 20
TRAPECIO_ALTURA = 10

# Configuración del slider
SLIDER_ANCHO = 150
SLIDER_ALTO = 20
SLIDER_MARGEN = 20
SLIDER_Y = ALTO - ALTO_PANEL + (ALTO_PANEL // 2) - (SLIDER_ALTO // 2)  # Centrado verticalmente en el panel

# Posiciones horizontales basadas en porcentajes del ancho
POSICION_SLIDER_1 = int(ANCHO * 0.22)  # 20% del ancho
POSICION_SLIDER_2 = int(ANCHO * 0.53)  # 50% del ancho
POSICION_SLIDER_3 = int(ANCHO * 0.86)  # 80% del ancho

class Slider:
    def __init__(self, x, y, ancho, alto, min_val, max_val, valor_inicial, texto):
        self.x = x - (ancho // 2)  # Centrar el slider en la posición x
        self.y = y
        self.ancho = ancho
        self.alto = alto
        self.min_val = min_val
        self.max_val = max_val
        self.valor = valor_inicial
        self.texto = texto
        self.arrastrando = False
        self.rect = pygame.Rect(self.x, y, ancho, alto)
        self.rect_control = pygame.Rect(self.x, y, 10, alto)

    def actualizar_valor(self, pos_x):
        # Convertir posición del ratón a valor
        pos_relativa = max(0, min(pos_x - self.x, self.ancho))
        self.valor = self.min_val + (pos_relativa / self.ancho) * (self.max_val - self.min_val)
        # Actualizar posición del control
        self.rect_control.x = self.x + pos_relativa - 5

    def dibujar(self, pantalla):
        # Dibujar el texto
        fuente = pygame.font.SysFont(None, 24)
        texto = fuente.render(self.texto, True, BEIGE)
        texto_rect = texto.get_rect()
        texto_rect.x = self.x - texto_rect.width - 10
        texto_rect.centery = self.y + self.alto//2
        pantalla.blit(texto, texto_rect)

        # Dibujar la barra del slider
        pygame.draw.rect(pantalla, GRIS_OSCURO, self.rect)
        # Dibujar el control deslizante
        pygame.draw.rect(pantalla, BEIGE, self.rect_control)

    def manejar_evento(self, evento):
        if evento.type == pygame.MOUSEBUTTONDOWN:
            if self.rect_control.collidepoint(evento.pos):
                self.arrastrando = True
        elif evento.type == pygame.MOUSEBUTTONUP:
            self.arrastrando = False
        elif evento.type == pygame.MOUSEMOTION and self.arrastrando:
            self.actualizar_valor(evento.pos[0])

class Punto:
    def __init__(self):
        self.x = random.randint(0, ANCHO)
        self.y = random.randint(0, ALTO)
        angulo = random.uniform(0, 2*math.pi)
        self.velocidad_x = VELOCIDAD * math.cos(angulo)
        self.velocidad_y = VELOCIDAD * math.sin(angulo)
        self.radio = 3
        self.superficie = pygame.Surface((self.radio * 2, self.radio * 2), pygame.SRCALPHA)
        pygame.draw.circle(self.superficie, BEIGE, (self.radio, self.radio), self.radio)
    def dibujar(self, pantalla):
        pantalla.blit(self.superficie, (int(self.x - self.radio), int(self.y - self.radio)))

def dibujar_lineas(pantalla, puntos):
    # Crear una superficie para las líneas con canal alfa
    superficie_lineas = pygame.Surface((ANCHO, ALTO), pygame.SRCALPHA)
    
    # Dibujar líneas entre puntos cercanos
    for i, punto1 in enumerate(puntos):
        for punto2 in puntos[i+1:]:
            distancia = punto1.distancia_a(punto2)
            if distancia < DISTANCIA_MAXIMA:
                # Calcular opacidad basada en la distancia
                opacidad = int(OPACIDAD_LINEA * (1 - distancia/DISTANCIA_MAXIMA))
                pygame.draw.line(superficie_lineas, (*BEIGE, opacidad), 
                               (int(punto1.x), int(punto1.y)), 
                               (int(punto2.x), int(punto2.y)), 1)
    
    # Dibujar la superficie de líneas en la pantalla
    pantalla.blit(superficie_lineas, (0, 0))

def dibujar_panel_control(pantalla):
    # Calcular la posición del panel
    y_panel = ALTO - ALTO_PANEL if panel_visible else ALTO

    # Dibujar el panel de control si está visible
    if panel_visible:
        pygame.draw.rect(pantalla, GRIS_PANEL, (0, y_panel, ANCHO, ALTO_PANEL))

        # Dibujar los sliders
        for slider in sliders:
            slider.dibujar(pantalla)

    # Dibujar el trapecio
    x_centro = ANCHO // 2
    y_trapecio = y_panel
    puntos_trapecio = [
        (x_centro + TRAPECIO_BASE_MENOR//2, y_trapecio - TRAPECIO_ALTURA),  # Esquina superior derecha
        (x_centro - TRAPECIO_BASE_MENOR//2, y_trapecio - TRAPECIO_ALTURA),   # Esquina superior izquierda
        (x_centro - TRAPECIO_BASE_MAYOR//2, y_trapecio),  # Esquina inferior izquierda
        (x_centro + TRAPECIO_BASE_MAYOR//2, y_trapecio)  # Esquina inferior derecha
    ]
    pygame.draw.polygon(pantalla, BEIGE, puntos_trapecio)

    # Crear un rectángulo para la detección de clics
    boton_rect = pygame.Rect(
        x_centro - TRAPECIO_BASE_MAYOR//2,
        y_trapecio - TRAPECIO_ALTURA,
        TRAPECIO_BASE_MAYOR,
        TRAPECIO_ALTURA
    )
    return boton_rect

# Crear los sliders
sliders = [
    Slider(
        POSICION_SLIDER_1,  # x
        SLIDER_Y,          # y
        SLIDER_ANCHO,      # ancho
        SLIDER_ALTO,       # alto
        VELOCIDAD_MIN,     # valor mínimo
        VELOCIDAD_MAX,     # valor máximo
        VELOCIDAD,         # valor inicial
        "SPEED"            # texto
    ),
    Slider(
        POSICION_SLIDER_2,  # x
        SLIDER_Y,          # y
        SLIDER_ANCHO,      # ancho
        SLIDER_ALTO,       # alto
        NUMERO_PUNTOS_MIN, # valor mínimo
        NUMERO_PUNTOS_MAX, # valor máximo
        NUMERO_PUNTOS,     # valor inicial
        "POINTS"           # texto
    ),
    Slider(
        POSICION_SLIDER_3,  # x
        SLIDER_Y,          # y
        SLIDER_ANCHO,      # ancho
        SLIDER_ALTO,       # alto
        DISTANCIA_MIN,     # valor mínimo
        DISTANCIA_MAX,     # valor máximo
        DISTANCIA_MAXIMA,  # valor inicial
        "DISTANCE"         # texto
    )
]

async def main():
    global VELOCIDAD, NUMERO_PUNTOS
    print("Entrando en main()")
    puntos = [Punto() for _ in range(NUMERO_PUNTOS)]
    print("Puntos iniciales:", len(puntos))
    corriendo = True
    reloj = pygame.time.Clock()
    boton_rect = None

    while corriendo:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                corriendo = False
            elif evento.type == pygame.MOUSEBUTTONDOWN:
                # Verificar si se hizo clic en el botón del panel
                if boton_rect and boton_rect.collidepoint(evento.pos):
                    panel_visible = not panel_visible
                # Manejar eventos de los sliders
                if panel_visible:
                    for slider in sliders:
                        slider.manejar_evento(evento)
            elif evento.type == pygame.MOUSEBUTTONUP:
                if panel_visible:
                    for slider in sliders:
                        slider.manejar_evento(evento)
            elif evento.type == pygame.MOUSEMOTION:
                if panel_visible:
                    for slider in sliders:
                        slider.manejar_evento(evento)

        # Actualizar valores si han cambiado
        if VELOCIDAD != sliders[0].valor:
            VELOCIDAD = sliders[0].valor
            for punto in puntos:
                punto.velocidad_x = VELOCIDAD * math.cos(math.atan2(punto.velocidad_y, punto.velocidad_x))
                punto.velocidad_y = VELOCIDAD * math.sin(math.atan2(punto.velocidad_y, punto.velocidad_x))

        if NUMERO_PUNTOS != int(sliders[1].valor):
            NUMERO_PUNTOS = int(sliders[1].valor)
            # Ajustar el número de puntos
            while len(puntos) < NUMERO_PUNTOS:
                puntos.append(Punto())
            while len(puntos) > NUMERO_PUNTOS:
                puntos.pop(0)

        if DISTANCIA_MAXIMA != sliders[2].valor:
            DISTANCIA_MAXIMA = sliders[2].valor

        # Actualizar puntos
        puntos_a_eliminar = []
        for punto in puntos:
            punto.x += punto.velocidad_x
            punto.y += punto.velocidad_y
            if (punto.x < -punto.radio or punto.x > ANCHO + punto.radio or 
                punto.y < -punto.radio or punto.y > ALTO):
                puntos_a_eliminar.append(punto)

        # Eliminar puntos que deben ser destruidos
        for punto in puntos_a_eliminar:
            if punto in puntos:  # Verificar que el punto aún está en la lista
                puntos.remove(punto)

        # Añadir nuevos puntos si es necesario
        if len(puntos) < NUMERO_PUNTOS:
            puntos.append(Punto())

        # Dibujar
        pantalla.fill(GRIS_OSCURO)
        dibujar_lineas(pantalla, puntos)  # Dibujar líneas primero
        for punto in puntos:
            punto.dibujar(pantalla)  # Dibujar puntos después
        boton_rect = dibujar_panel_control(pantalla)  # Dibujar el panel de control y obtener el rect del botón
        
        pygame.display.flip()
        reloj.tick(60)  # 60 FPS
        await asyncio.sleep(0)  # Cede el control al navegador

    # Salir
    pygame.quit()

if __name__ == "__main__":
    asyncio.run(main())
