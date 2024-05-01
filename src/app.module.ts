import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RolesModule } from "./modules/roles/roles.module";
import { UsersModule } from "./modules/users/users.module";
import { LoggerMiddleware } from "./common/middlewares/logger/logger.middleware";
import { ServicesModule } from "./modules/services/services.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { ProjectCategoriesModule } from './modules/project-categories/project-categories.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [
    RolesModule,
    UsersModule,
    ServicesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, ".."),
    }),
    ProjectCategoriesModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
