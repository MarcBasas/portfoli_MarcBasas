import pygame
import asyncio

pygame.init()
pantalla = pygame.display.set_mode((640, 480))
pygame.display.set_caption("Test Pygbag")

async def main():
    corriendo = True
    while corriendo:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                corriendo = False
        pantalla.fill((0, 0, 0))
        pygame.draw.circle(pantalla, (255, 0, 0), (320, 240), 50)
        pygame.display.flip()
        await asyncio.sleep(0)
    pygame.quit()

if __name__ == "__main__":
    asyncio.run(main())