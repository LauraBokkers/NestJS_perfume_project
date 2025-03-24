import { Controller, Get, Post, Body, Patch, Param, Delete, ParseEnumPipe } from '@nestjs/common';
import { AromachemicalsService } from './aromachemicals.service';
import { OdorStrength, Persistence, Prisma, ScentCategory, Supplier } from '@prisma/client';


@Controller('aromachemicals')
export class AromachemicalsController {
  constructor(private readonly aromachemicalsService: AromachemicalsService) { }

  @Get()
  findAll() {
    return this.aromachemicalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aromachemicalsService.findOne(+id);
  }

  @Get('get-by-category/:category')
  findByCategory(@Param('category') category: string) {
    return this.aromachemicalsService.findByCategory(category);
  }

  @Get('get-by-persistence/:persistence')
  findByPersistence(@Param('persistence', new ParseEnumPipe(Persistence)) persistence: Persistence) {
    return this.aromachemicalsService.findByPersistence(persistence);
  }

  @Get('get-by-supplier/:supplier')
  findBySupplier(@Param('supplier', new ParseEnumPipe(Supplier)) supplier: Supplier) {
    return this.aromachemicalsService.findBySupplier(supplier);
  }

  @Get('get-by-odor-strength/:odor_strength')
  findByOdorStrength(@Param('odor_strength', new ParseEnumPipe(OdorStrength)) odor_strength: OdorStrength) {
    return this.aromachemicalsService.findByOdorStrength(odor_strength);
  }


  @Post()
  createAromachemical(@Body() createAromachemicalDto: { scent_category: ScentCategory[]; aromachemical: Prisma.AromachemicalCreateInput }) {
    return this.aromachemicalsService.createAromachemical(createAromachemicalDto);
  }

  @Post('scent-category')
  createScentCategory(@Body() createScentCategoryDto: Prisma.ScentCategoryCreateInput) {
    return this.aromachemicalsService.createScentCategory(createScentCategoryDto);
  }



  @Patch(':id')
  updateAromachemical(@Param('id') id: string, @Body() updateAromachemicalDto: Prisma.AromachemicalCreateInput) {
    return this.aromachemicalsService.updateAromachemical(+id, updateAromachemicalDto);
  }


  @Patch('update-scent-category/:id')
  updateScentCategory(@Param('id') id: string, @Body() updateScentCategoryDto: Prisma.ScentCategoryCreateInput) {
    return this.aromachemicalsService.updateScentCategory(+id, updateScentCategoryDto);
  }



  @Delete(':id')
  removeAromachemical(@Param('id') id: string) {
    return this.aromachemicalsService.removeAromachemical(+id);
  }

  @Delete('delete-scent-category/:id')
  removeScentCategory(@Param('id') id: string) {
    return this.aromachemicalsService.removeScentCategory(+id);
  }


}
