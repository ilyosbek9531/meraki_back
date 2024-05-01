import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { ApiBody, ApiConsumes, ApiOperation } from "@nestjs/swagger";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("upload")
  @ApiOperation({ summary: "Upload a single file" })
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    required: true,
    schema: {
      type: "object",
      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "public/img",
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    })
  )
  async local(@UploadedFile() file: Express.Multer.File) {
    return {
      statusCode: 200,
      data: file.path,
    };
  }
}
