FROM node

WORKDIR ./

COPY . . 

EXPOSE 3000

CMD ["npm start"]