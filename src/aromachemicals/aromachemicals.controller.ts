import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AromachemicalsService } from './aromachemicals.service';
import { Prisma } from '@prisma/client';

@Controller('aromachemicals')
export class AromachemicalsController {
  constructor(private readonly aromachemicalsService: AromachemicalsService) { }

  @Post()
  create(@Body() createAromachemicalDto: Prisma.AromachemicalCreateInput) {
    return this.aromachemicalsService.create(createAromachemicalDto);
  }

  @Get()
  findAll() {
    return this.aromachemicalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aromachemicalsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAromachemicalDto: Prisma.AromachemicalCreateInput) {
    return this.aromachemicalsService.update(+id, updateAromachemicalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aromachemicalsService.remove(+id);
  }
}
