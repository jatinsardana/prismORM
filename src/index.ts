import { PrismaClient } from '@prisma/client';
import { log } from 'console';

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password: password,
      firstName: firstName,
    },
    select: {
      id: true,
      email: true,
      password: true,
    },
  });
  console.log(res);
}

async function updateUser(username: string, firstName: string) {
  const res = await prisma.user.update({
    where: {
      email: username,
    },
    data: {
      firstName 
    },
  });
  console.log(res);
}

async function getUser() {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// tsc -b  , node dist/index.js for running good to go :)

updateUser('jatin3@g.com' , 'jatinsardana');
insertUser("jatin3@g.com" , "pass3" , "jatin3");
getUser();
