/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Services` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "ProjectCategories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "project_category_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectCategories_title_key" ON "ProjectCategories"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_title_key" ON "Projects"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Services_title_key" ON "Services"("title");

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_project_category_id_fkey" FOREIGN KEY ("project_category_id") REFERENCES "ProjectCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
