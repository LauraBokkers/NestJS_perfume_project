import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FormulasService } from './formulas.service';
import { Prisma } from '@prisma/client';

@Controller('formulas')
export class FormulasController {
  constructor(private readonly formulasService: FormulasService) { }

  @Post()
  create(@Body() createFormulaDto: Prisma.FormulaCreateInput) {
    return this.formulasService.create(createFormulaDto);
  }

  @Get()
  findAll() {
    return this.formulasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formulasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormulaDto: Prisma.FormulaUpdateInput) {
    return this.formulasService.update(+id, updateFormulaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formulasService.remove(+id);
  }
}
