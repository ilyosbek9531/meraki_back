import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { PrismaClientExceptionFilter } from "./common/http-exception/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const options = new DocumentBuilder()
    .setTitle("Meraki")
    .setDescription("developed by WIUT students")
    .setVersion("1.0")
    .addServer("http://localhost:3000", "Local Environment")
    .addServer("https://meraki-back.onrender.com/", "Online Environment")
    .addBearerAuth()
    .build();

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api-doc", app, document);

  await app.listen(3000);
}
bootstrap();
