# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# 새로운 단독의 nginx 이미지 생성
FROM nginx

# Expose the port the app runs on
EXPOSE 3000

# default.conf을 /etc/nginx/conf.d/ 경로에 있는 default.conf에 복사한다.
COPY ./default.conf /etc/nginx/conf.d/default.conf

# nextjs build한 결과물을 /usr/share/nginx/html에 복사한다.
COPY --from=build app/out  /usr/share/nginx/html

# Define the command to run the application
CMD ["npm", "start"]
