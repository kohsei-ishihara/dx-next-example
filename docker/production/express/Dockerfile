FROM node:alpine
#RUN yum install -y httpd
ADD /src/* /var/www/html/
EXPOSE 80
CMD ["cd /var/www/html/ && npm install && npm run build && npm run start"]
