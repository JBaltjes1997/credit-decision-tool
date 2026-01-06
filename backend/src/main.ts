import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });
  await app.listen(4000, '0.0.0.0');
}
void bootstrap();
