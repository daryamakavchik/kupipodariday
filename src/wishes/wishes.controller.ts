import {
  Controller,
  UseGuards,
  Body,
  Post,
  Get,
  Param,
  Req,
  Patch,
  Delete,
} from "@nestjs/common";
import { WishesService } from "./wishes.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateWishDto } from "./dto/create-wish.dto";
import { UpdateWishDto } from "./dto/update-wish.dto";

@Controller("wishes")
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createWishDto: CreateWishDto) {
    return this.wishesService.create(req.user, createWishDto);
  }

  //@UseInterceptors(FormatWishInterceptor)
  @Get("/last")
  findLastWishes() {
    return this.wishesService.findLastWishes();
  }

  //@UseInterceptors(FormatWishInterceptor)
  @Get("/top")
  findTopWishes() {
    return this.wishesService.findTopWishes();
  }

  //@UseInterceptors(FormatWishInterceptor)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.wishesService.findOne(Number(id));
  }

  //@UseInterceptors(FormatWishInterceptor)
  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Req() req,
    @Body() updateWishDto: UpdateWishDto
  ) {
    const userId = req.user.id;
    return this.wishesService.update(Number(id), Number(userId), updateWishDto);
  }

  //@UseInterceptors(FormatWishInterceptor)
  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string, @Req() req) {
    const userId = req.user.id;
    return this.wishesService.remove(Number(id), Number(userId));
  }

  //@UseInterceptors(FormatWishInterceptor)
  @UseGuards(JwtAuthGuard)
  @Post(":id/copy")
  copyWish(@Param("id") id: string, @Req() req) {
    const userId = req.user.id;
    return this.wishesService.copyWish(Number(id), Number(userId));
  }
}
