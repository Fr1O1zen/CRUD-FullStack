import { seedDatabase } from "./knexseed";

async function runSeed() {
  try {
    await seedDatabase();
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

runSeed();