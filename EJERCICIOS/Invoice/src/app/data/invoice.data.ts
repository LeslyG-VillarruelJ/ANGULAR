import { Invoice } from "../model/invoice";

export const invoiceData: Invoice = {
    id: "001",
    company: {
        id: "1792123456001",
        name: "Clear minds Consultores",
        address: {
            city: "Quito",
            principalStreet: "Juan Pablo Sanz",
            secondaryStreet: "Iñaquito",
            code: "N-57"
        }
    },
    customer: {
        id: "1753123456",
        name: "Santiago",
        surname: "Mosquera",
        address: {
            city: "Quito",
            principalStreet: "Tejar",
            secondaryStreet: "Cerro Narrio",
            code: "N-96"
        }
    },
    item: [
        {
            id: 1,
            product: {
                id: "001",
                name: "Papas Ruffles",
                price: 0.50,
                description: "Papas, snacks",
                category: {
                    id: 1,
                    name: "Snacks"
                }
            },
            quantity: 3
        },
        {
            id: 2,
            product: {
                id: "002",
                name: "Doritos",
                price: 0.60,
                description: "Doritos, snacks",
                category: {
                    id: 1,
                    name: "Snacks"
                }
            },
            quantity: 4
        },
        {
            id: 3,
            product: {
                id: "003",
                name: "Kachitos",
                price: 0.30,
                description: "Kachitos, snacks",
                category: {
                    id: 1,
                    name: "Snacks"
                }
            },
            quantity: 100
        }
    ]
}