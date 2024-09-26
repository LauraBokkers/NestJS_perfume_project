import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FormulasService } from './formulas.service';
import { Prisma } from '@prisma/client';


export class CreateFormulaDto {
  title: string;
  formulaLines: {
    aroma_chemical_id: number;
    quantity: number;
  }[];
}



@Controller('formulas')
export class FormulasController {
  constructor(private readonly formulasService: FormulasService) { }


  @Get()
  findAll() {
    return this.formulasService.findAll();
  }

  @Get('get-formula-by-id/:id')
  findOneById(@Param('id') id: string) {
    return this.formulasService.findOneById(+id);
  }

  @Get('get-formula-by-title/:title')
  findOneByName(@Param('title') title: string) {
    return this.formulasService.findOneByName(title);
  }

  @Get('get-formulas-including/:aromachemicalId')
  findAllByAromachemicalId(@Param('aromachemicalId', ParseIntPipe) aromachemicalId: number) {
    return this.formulasService.findAllByAromachemicalId(aromachemicalId);
  }





  @Post()
  create(@Body() createFormulaDto: CreateFormulaDto) {
    return this.formulasService.create(createFormulaDto);
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



