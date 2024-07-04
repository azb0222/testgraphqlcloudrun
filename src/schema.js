const { gql } = require('apollo-server')
const { prisma } = require('./db')
const typeDefs = gql`
    type Chall {
        id: ID!
        name: String!
        category: String!
        flag: String! 
        points: Int! 
        public: Boolean! 
    }
    type Query { 
        challs: [Chall!]!
        chall(id: ID!): Chall
    }
    type Mutation {
        createDraftChall(name: String!, category: String!, flag: String!, points: Int!): Chall!
        publish(id: ID!): Chall
    }
`

const resolvers = { 
    Query: { 
        challs: (parent, args) => { 
            return prisma.chall.findMany({
                where: {
                    public: true
                }, 
            })
        }, 
        chall: (parent, args) => { 
            return prisma.chall.findUnique({
                where: { 
                    id: Number(args.id),  
                }
            })
        }
    }, 
    Mutation: { 
        createDraftChall: (parent, args) => { 
            return prisma.chall.create({
                data: { 
                    name: args.name, 
                    category: args.category, 
                    flag: args.flag, 
                    points: args.points, 
                },
            })
        }, 
        publish: (parent, args) => { 
            return prisma.chall.update({
                where: { 
                    id: Number(args,id), 
                }, 
                data: { 
                    public: true, 
                }
            })
        }
    }
}

module.exports = { 
    resolvers, 
    typeDefs, 
}