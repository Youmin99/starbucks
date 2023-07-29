import { ApolloServer, gql } from "apollo-server";
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'

const typeDefs = gql`

type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [BoardReturn]
  }

  type Mutation {
    createTokenOfPhone(myphone: String): String

  }
`;

const resolvers = {
  Query: {
    fetchBoards: (_, args) => {
      return [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다",
          contents: "내용입니다",
        },
        {
          number: 2,
          writer: "영희",
          title: "좋은 날씨입니다",
          contents: "내용입니다",
        }
      ];
    },
  },
    

  Mutation: {
    createTokenOfPhone: (_, args) => {
      const myphone = args.myphone

      const isValid = checkValidationPhone(myphone)
      if(isValid){

        const mytoken = getToken()

        sendTokenToSMS(myphone, mytoken)
        return "phone is valid"  
      }
      return "phone is not valid"      
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(5000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});