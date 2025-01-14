import React from 'react';
import { useHistory } from 'react-router-dom';
import './ListaProductos.css';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonRow,
  IonCol,
  IonText,
} from '@ionic/react';

interface Product {
  productoId: number;
  nombre: string;
  descripcion: string;
  precio: number;
  existencia: number;
  descuento: number;
  categoriaId: number;
  statusId: number;
  imagen: string;
  IVA: number;
  precioFinal: number;
  createdAt: string;
  updatedAt: string;
  ranking: number;
}

interface ListaProductosProps {
  products: Product[];
}

const ListaProductos: React.FC<ListaProductosProps> = ({ products }) => {
  const history = useHistory();

  // Función para redirigir a la página de detalles del producto
  const handleProductClick = (productId: number) => {
    history.push(`/product/${productId}`);
  };

  return (
    <IonPage className='scroll-container'>
      <IonContent>
        {products.length === 0 ? (
          <IonText color="danger">No hay productos disponibles</IonText>
        ) : (
          products.map((product) => (
            <IonCard key={product.productoId} onClick={() => handleProductClick(product.productoId)}>
              <IonRow>
                <IonCol size="4">
                  <IonImg src={product.imagen} alt={product.nombre} />
                </IonCol>
                <IonCol size="8">
                  <IonCardHeader>
                    <IonCardTitle>{product.nombre}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      <p><strong>Precio:</strong> ${product.precioFinal}</p>
                      {product.descuento > 0 && (
                        <p><strong>Descuento:</strong> {product.descuento}%</p>
                      )}
                      <p><strong>Existencia:</strong> {product.existencia}</p>
                      <p><strong>Ranking:</strong> {product.ranking}/5</p>
                    </IonText>
                  </IonCardContent>
                </IonCol>
              </IonRow>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default ListaProductos;
