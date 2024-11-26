import { type ScentCategory, PrismaClient, type Prisma } from "@prisma/client";


const scent_categories: ScentCategory[] = [
    {
        id: 1,
        category: "Green",
        key: "green"
    },
    {
        id: 2,
        category: "Musk",
        key: "musk"
    },
    {
        id: 3,
        category: "Sweet",
        key: "sweet"
    },
    {
        id: 4,
        category: "Woody",
        key: "woody"
    },
    {
        id: 5,
        category: "Citric",
        key: "citric"
    },
    {
        id: 6,
        category: "Aromatic",
        key: "aromatic"
    },
    {
        id: 7,
        category: "Floral",
        key: "floral"
    },
    {
        id: 8,
        category: "Modifier",
        key: "modifier"
    },
    {
        id: 9,
        category: "Fruity",
        key: "fruity"
    },
    {
        id: 10,
        category: "Gourmand",
        key: "gourmand"
    },
    {
        id: 11,
        category: "Aquatic",
        key: "aquatic"
    },
    {
        id: 12,
        category: "White Floral",
        key: "white_floral"
    },
    {
        id: 13,
        category: "Herbal",
        key: "herbal"
    },
    {
        id: 14,
        category: "Resinous",
        key: "resinous"
    },
    {
        id: 15,
        category: "Fresh",
        key: "fresh"
    },
    {
        id: 16,
        category: "Earthy",
        key: "earthy"
    },
    {
        id: 17,
        category: "Uncategorized",
        key: "uncategorized"
    }

]

type AromachemicalSeedData = Omit<Prisma.AromachemicalCreateInput, "scent_category"> & {
    scent_category: { id: number }[];
};


const aromachemicals: AromachemicalSeedData[] = [
    {
        name: "Scentenal (FIR)",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 11 }]
    },
    {
        name: "EO Sinaasappel",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 5 }]
    },
    {
        name: "EO Lemongrass",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 5 }]
    },
    {
        name: "EO Bergamot",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 5 }]
    },
    {
        name: "EO Citroen",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 5 }]
    },
    {
        name: "Dihydromyrcenol",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 5 }]
    },
    {
        name: "EO Grapefruit",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 5 }]
    },
    {
        name: "Hedione (FIR)",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Heliotropex N (IFF)",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Isoraldeine",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Alfa Isomethyljonon",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "EO Rozen 5%",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "EO Jasmijn 3%",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Geraniol",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "PADMA",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Fenylethylalcohol",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Lindenol (IFF) (alfa terpineol)",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Citronellol",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Linalool",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Benzylacetaat",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Linalylacetaat",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 7 }]
    },
    {
        name: "Nectarate (IFF)",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 9 }]
    },
    {
        name: "Aldehyde C16",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 9 }]
    },
    {
        name: "Frambozen ketonen 10% (DPG)",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 9 }]
    },
    {
        name: "Methylcinnamaat",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 9 }]
    },
    {
        name: "Hexylacetaat",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 9 }]
    },
    {
        name: "DMBC butyraat",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 9 }]
    },
    {
        name: "Isobutylfenylacetaat",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 10 }]
    },
    {
        name: "Vanilline 25% (DPG)",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 10 }]
    },
    {
        name: "Coumarine 10% (DPG)",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 10 }]
    },
    {
        name: "Mythyl Cyclopentenolone 10% (DPG)",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 10 }]
    },
    {
        name: "Methylbenzoaat",
        description: null,
        odor_strength: null,
        persistence: null,
        dilution_material: null,
        IFRA_limit: null,
        supplier: null,
        scent_category: [{ id: 1 }]
    }
]


const prisma = new PrismaClient();

async function main() {
    console.log('🌱 seeding...');
    await prisma.scentCategory.createMany({
        data: scent_categories,
        skipDuplicates: true
    })

    for (const aroma of aromachemicals) {
        await prisma.aromachemical.upsert({
            where: { name: aroma.name },
            create: {
                name: aroma.name,
                description: aroma.description,
                odor_strength: aroma.odor_strength,
                persistence: aroma.persistence,
                dilution_material: aroma.dilution_material,
                IFRA_limit: aroma.IFRA_limit,
                supplier: aroma.supplier,
                scent_category: {
                    connect: aroma.scent_category.map((cat) => ({ id: cat.id })),
                },
            }, update: {}
        });
    }

}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
