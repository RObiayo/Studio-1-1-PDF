import React from 'react';
import {Fragment} from 'react';
import {Text, View, Page, Document, StyleSheet } from '@react-pdf/renderer';

const Invoice = () => {
    // Define the receipt data
    const reciept_data = {
        name: 'John Doe',
        address: '123 Main Street',
        items: [
            { description: 'Item 1', quantity: 2, price: 10 },
            { description: 'Item 2', quantity: 1, price: 20 },
        ],
        total: 40,
    };

    // Define styles
    const styles = StyleSheet.create({
        page: {
            padding: 30,
        },
        section: {
            marginBottom: 10,
        },
        title: {
            fontSize: 20,
            marginBottom: 10,
        },
        text: {
            fontSize: 12,
            marginBottom: 5,
        },
    });

    // Invoice title component
    const InvoiceTitle = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <Text style={styles.reportTitle}>Studio 1:1</Text>
            </View>
        </View>
    );

    // Address component
    const Address = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View>
                    <Text style={styles.invoice}>Invoice </Text>
                    <Text style={styles.invoiceNumber}>Invoice number: {reciept_data.invoice_no} </Text>
                </View>
                <View>
                    <Text style={styles.addressTitle}>7, Ronnie Obiayo, </Text>
                    <Text style={styles.addressTitle}>Athi River,</Text>
                    <Text style={styles.addressTitle}>Nairobi, Kenya.</Text>
                </View>
            </View>
        </View>
    );

    // User Address component
    const UserAddress = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View style={{maxWidth : 200}}>
                    <Text style={styles.addressTitle}>Bill to </Text>
                    <Text style={styles.address}>
                        {reciept_data.address}
                    </Text>
                </View>
                <Text style={styles.addressTitle}>{reciept_data.date}</Text>
            </View>
        </View>
    );

    // Table Header component
    const TableHead = () => (
        <View style={{ width:'100%', flexDirection :'row', marginTop:10}}>
            <View style={[styles.theader, styles.theader2]}>
                <Text >Items</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Price</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Qty</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Amount</Text>   
            </View>
        </View>
    );

    // Table Body component
    const TableBody = () => (
        reciept_data.items.map((receipt)=>(
         <Fragment key={receipt.id}>
             <View style={{ width:'100%', flexDirection :'row'}}>
                 <View style={[styles.tbody, styles.tbody2]}>
                     <Text >{receipt.desc}</Text>   
                 </View>
                 <View style={styles.tbody}>
                     <Text>{receipt.price} </Text>   
                 </View>
                 <View style={styles.tbody}>
                     <Text>{receipt.qty}</Text>   
                 </View>
                 <View style={styles.tbody}>
                     <Text>{(receipt.price * receipt.qty).toFixed(2)}</Text>   
                 </View>
             </View>
         </Fragment>
        ))
     );

    // Table Total component
    const TableTotal = () => (
        <View style={{ width:'100%', flexDirection :'row'}}>
            <View style={styles.total}>
                <Text></Text>   
            </View>
            <View style={styles.total}>
                <Text> </Text>   
            </View>
            <View style={styles.tbody}>
                <Text>Total</Text>   
            </View>
            <View style={styles.tbody}>
                <Text>
                    {reciept_data.items.reduce((sum, item)=> sum + (item.price * item.qty), 0)}
                </Text>  
            </View>
        </View>
    );

    // Return the document
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <InvoiceTitle />
                <Address />
                <UserAddress />
                <TableHead />
                <TableBody />
                <TableTotal />
            </Page>
        </Document>
    );
};

export default Invoice;
