FROM node:11
ENV TINI_VERSION v0.14.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

WORKDIR /app
COPY package.json /app

RUN ["npm", "install"]

COPY . /app

CMD ["npm", "run", "test:local", "--", "--spec", "./features/examples/firstTest.feature"]
