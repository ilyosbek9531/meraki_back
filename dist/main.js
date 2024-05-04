"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_exception_filter_1 = require("./common/http-exception/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle("Meraki")
        .setDescription("developed by WIUT students")
        .setVersion("1.0")
        .addServer("http://localhost:3000", "Local Environment")
        .addServer("https://meraki-back.onrender.com/", "Online Environment")
        .addBearerAuth()
        .build();
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.useGlobalFilters(new http_exception_filter_1.PrismaClientExceptionFilter(httpAdapter));
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("api-doc", app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map