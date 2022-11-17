-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('low', 'middle', 'high');

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "priority" "Priority" NOT NULL DEFAULT 'low',
    "deadlineTimestamp" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
