Problem Management

model Problem {
   id String @id @default(uuid())
   title String
   description String
   difficulty Difficulty
   tags String[] // ["tag1", "tag2", "tag3"]
   userId String
   examples  Json
   constraints String
   hints String?
   editorial String?

   testcases  Json // 
   codeSnippets Json
   referenceSolutions Json

   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt

  //  Relationship
  user  User    @relation(fields: [userId], references: [id] , onDelete: Cascade)
}

--- npx prisma generate
--- npx prisma migrate dev
--- npx prisma db push

## Installation of Judge0

-- ChangeLog.md 

wget https://github.com/judge0/judge0/releases/download/v1.14.0/judge0-1.14.0-linux-x64.tar.gz


unzip judge0-1.14.1.zip

cd judge0-1.14.1
config redis and postgres password 

docker compose up -d db redis













