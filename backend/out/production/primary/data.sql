-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: digital_booking
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES
(1,'Hoteles de diversas categorías con la mejor relación precio-calidad, servicios de restaurante, gimnasio, spa, actividades, etc.','Hoteles','https://images.unsplash.com/photo-1578898886225-c7c894047899?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387'),
(2,'Alojamientos con cocina, baño y comedor compartidos, el mejor lugar para conocer viajeros de todo el mundo.','Hostels','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/42160847.jpg?k=eb0e93e1e6fb9bc0309eb790aa9bce400b0784166de1769ac9be5a351afb01a9&o=&hp=1'),
(3,'Departamentos de una o más habitaciones, usados y a estrenar.','Departamentos','https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/100210804.jpg?k=b4266521a7d7dd6165b0c37f1d18382eeab462ae18efbe779bcfb48b460c06b6&o=&hp=1'),
(4,'Alquiler de habitaciones en casas familiares privadas donde viven sus propios dueños. ','Bed and breakfast','https://images.unsplash.com/photo-1602774895754-2772f8a08f6b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `characteristics`
--

LOCK TABLES `characteristics` WRITE;
/*!40000 ALTER TABLE `characteristics` DISABLE KEYS */;
INSERT INTO `characteristics` VALUES
(1,'fa-solid fa-sink','Cocina'),
(2,'fa-solid fa-car','Estacionamiento gratuito'),
(3,'fa-solid fa-tv','Televisor'),
(4,'fa-solid fa-person-swimming','Pileta'),
(5,'fa-solid fa-snowflake','Aire acondicionado'),
(6,'fa-solid fa-wifi','Wifi'),
(7,'fa-solid fa-paw','Apto mascotas'),
(8,'fa-solid fa-tree','Jardín'),
(9,'fa-solid fa-mug-hot','Desayuno'),
(10,'fa-solid fa-sun','Calefacción');
/*!40000 ALTER TABLE `characteristics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES
(1,'Argentina','Rosario','Santa Fe'),
(2,'Argentina','Villa Carlos Paz','Córdoba'),
(3,'Argentina','San Carlos de Bariloche','Río Negro'),
(4,'Argentina','Ushuaia','Tierra del Fuego'),
(5,'Brasil','Búzios','Río de Janeiro'),
(6,'Argentina','Villa General Belgrano','Córdoba'),
(7,'Argentina','Villa La Angostura','Neuquén'),
(8,'Argentina','San Rafael','Mendoza'),
(9,'Argentina','San Martín de Los Andes','Neuquén'),
(10,'Brasil','Río de Janeiro','Río de Janeiro'),
(11,'Argentina','Buenos Aires','Buenos Aires');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

--LOCK TABLES `roles` WRITE;
--/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
--INSERT INTO `roles` VALUES (1,'ADMIN'),(2,'USER');
--/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
--UNLOCK TABLES;
--
--
---- Dumping data for table `users`
--
--
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Administrador','Administrador','admin@gmail.com','admin123','Rosario'),(2,'User','User','user@gmail.com','user123','Rosario');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES
(1,'Av. San Martín 536','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','13:00:00','09:00:00','Esta propiedad está a 6 minutos caminando de la playa. El Hotel Nevada ofrece alojamiento de 3 estrellas con decoración característica alpina a 200 metros del lago Nahuel Huapi. Cuenta con WiFi gratis. /Todas las habitaciones del Nevada están insonorizadas y disponen de TV vía satélite, radio, artículos de aseo exclusivos y secador de pelo. /El restaurante del alojamiento sirve típica carne argentina y platos internacionales. Además, hay bar, biblioteca y sala de juegos con máquinas recreativas. /El Hotel Nevada está a 13 km del aeropuerto de San Carlos de Bariloche y a 19 km del cerro Catedral. /Nuestros clientes dicen que esta parte de San Carlos de Bariloche es su favorita, según los comentarios independientes.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Depósito de seguridad','Check-out: 10:00 /No se permiten fiestas /No fumar',-41.1336557,-71.3211229,'Hotel Nevada',1,3,1),
(2,'Rolando 250','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','15:00:00','09:00:00','Esta propiedad está a 5 minutos caminando de la playa. El Hotel Panamericano Bariloche de 4 estrellas, situado al lado del majestuoso lago Nahuel Huapi, ofrece habitaciones con vistas al lago y a las montañas y baño privado. El hotel alberga un spa, gimnasio y bañera de hidromasaje. /Las habitaciones y las suites ocupan un edificio amplio y elegante y ofrecen vistas al lago o a la ciudad. Además, el hotel cuenta con una amplia variedad de actividades de ocio para toda la familia. /El restaurante La Cave sirve fondues de queso a pedido. El piano bar del vestíbulo propone cócteles, bebidas, carnes ahumadas de la Patagonia y una amplia selección de vinos de la bodega Zuccardi. /El spa del hotel incluye pileta climatizada, gimnasio, sauna y bañera de hidromasaje. Entre las instalaciones del Panamericano Bariloche destacan el casino, la sala de juegos y el actividades para niños. /El personal del hotel organiza una amplia variedad de actividades de ocio en plena naturaleza, como ciclismo de montaña, equitación, pesca con mosca y paseos en kayak. /Nuestros clientes dicen que esta parte de San Carlos de Bariloche es su favorita, según los comentarios independientes.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Depósito de seguridad','Check-out: 10:00 /No se permiten fiestas /No fumar',-41.1343742,-71.3075128,'Hotel Panamericano Bariloche',1,3,1),
(3,'Av. Bustillo Km 11,5','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','16:00:00','11:00:00','Este hotel de 5 estrellas se encuentra a orillas del lago Nahuel Huapi y presenta una arquitectura elegante. El Casco Art Hotel exhibe 500 obras de arte exclusivas de escultores y pintores argentinos. Ofrece wifi gratis. La estación de esquí de Cerro Catedral y el centro de Bariloche están a 15 minutos en auto. /Las habitaciones del alojamiento El Casco Art Hotel están decoradas con cuadros exclusivos. Algunas tienen zona de estar amplia, bañera de hidromasaje y balcón con vistas al lago. /El restaurante gourmet, que ha sido galardonado, prepara platos exquisitos elaborados con productos locales. Todos los días se sirve un desayuno americano. El alojamiento cuenta con servicio de conserjería, room service, ducha escocesa, bañera de hidromasaje, gimnasio y sauna. Los tratamientos de belleza comportan un adicional. /Gracias a su ubicación, el hotel es un punto de partida idóneo para recorrer la provincia de Río Negro, a los pies de las montañas. El aeropuerto local se halla a 25 km.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Depósito de seguridad','Check-out: 10:00 /No se permiten fiestas /No fumar',-41.1101888,-71.4263859,'El Casco Art Hotel',1,3,1),
(4,'Avenida Bustillo km 6,900','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','17:00:00','11:00:00','Esta propiedad está a 7 minutos caminando de la playa. El Nido del Cóndor Hotel & Spa permite disfrutar de la calidez de una casa de campo con todas las lujosas comodidades de un hotel de 5 estrellas y un personal atento que proporciona una atención personalizada. La estación de esquí de Cerro Catedral está a 11 km. /El Nido del Cóndor está frente al lago Nahuel Huapi y a solo 300 metros de la playa Bonita. Se encuentra a un corto trayecto en auto de la ciudad de Bariloche y de 2 estaciones de esquí internacionales. /El alojamiento ofrece lecciones de esquí y servicios de transfer de ida y vuelta a la estación de esquí, alquiler de material de esquí y guardaesquíes. /El Nido del Cóndor Hotel & Spa alberga piscinas cubiertas y al aire libre para niños y adultos, y un lujoso spa con vistas al lago equipado con sauna, duchas escocesas y baños finlandeses donde se ofrece un gran número de tratamientos corporales. También se ofrecen sesiones de masaje por un adicional. /El alojamiento también dispone de una zona de juegos donde los niños podrán realizar actividades físicas, jugar a videojuegos y ver películas, bajo la supervisión del personal del hotel.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Depósito de seguridad','Check-out: 10:00 /No se permiten fiestas /No fumar',-41.1198368,-71.3883793,'Nido del Cóndor Hotel & Spa',1,3,1),
(5,'Av Los Ñires 3040','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','18:00:00','10:00:00','En Los Ñires se puede contemplar el impresionante paisaje de Tierra del Fuego. Sus habitaciones son amplias y elegantes y tienen ventanales con vistas a la cordillera de los Andes o al canal de Beagle. /Todas las habitaciones de Los Ñires Hotel cuentan con grandes ventanas con vistas y baño privado. /El Hotel Los Ñires se encuentra a 4 km del aeropuerto internacional y a 6 km del centro de Ushuaia, comúnmente considerada la ciudad más austral del mundo.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Depósito de seguridad','Check-out: 10:00 /No se permiten fiestas /No fumar',-54.8361643,-68.3637572,'Hotel Los Ñires',1,4,1),
(6,'Parque Nacional Perito Moreno 31','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','18:00:00','12:00:00','Esta propiedad está a 1 minuto de distancia de la playa. El Indómito Hostel se encuentra en San Carlos de Bariloche, a 9 km del centro cívico y a 7 km de la bahía Serena, y ofrece bar, salón compartido, jardín y wifi gratis. El alojamiento se encuentra a 14 km del Circuito Chico, a 14 km del parque Nahuelito y a 16 km de Llao Llao. El alojamiento ofrece entretenimiento nocturno y cocina compartida. /Las habitaciones del hostel están equipadas con armario, ropa de cama y patio con vistas al lago. Todas las habitaciones disponen de baño privado y aire acondicionado. Algunas habitaciones tienen balcón. /El Indómito Hostel sirve un desayuno continental. /El alojamiento cuenta con mesa de mesa de pool. /El Indómito Hostel se encuentra a 30 km de la isla Victoria y a 1,2 km del lago Gutiérrez. El aeropuerto más cercano es el de San Carlos de Bariloche, ubicado a 21 km del hostel.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Depósito de seguridad','Check-out: 10:00 /No se permiten fiestas /No fumar',-41.1657253,-71.4195217,'Indómito Hostel',2,3,1),
(7,'Av. San Martín 1720','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','15:00:00','11:00:00','El establecimiento Carlos Paz Departamentos está situado en Villa Carlos Paz, a 1,8 km del ayuntamiento, y cuenta con pileta exterior. Se encuentra a 1,8 km del puente Uruguay. Además, hay WiFi gratuita en todas las instalaciones y estacionamiento privado gratuito. /Algunos alojamientos tienen zona de comedor o balcón y todos incluyen TV, una cocina con horno y microondas y un baño privado con artículos de aseo gratuitos. Se proporcionan toallas y ropa de cama. /El Reloj de Cucú se encuentra a 2,4 km del establecimiento Carlos Paz Departamentos. El aeropuerto Ambrosio L. V. Taravella, situado a 27 km del establecimiento Carlos Paz Departamentos, es el más cercano.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Depósito de seguridad','Check-out: 10:00 /No se permiten fiestas /No fumar',-31.4077319,-64.4806464,'Carlos Paz Departamentos',3,2,1),
(8,'Martín Coronado 421','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','15:00:00','11:00:00','Esta propiedad está a 18 minutos caminando de la playa. Lo de Lala B&B con Energía Solar está situado en Acassuso, a 2,5 km de Puerto San Isidro, y ofrece alojamiento con jardín, wifi gratis, recepción las 24 horas y room service. Este bed and breakfast cuenta con pileta privada. En la zona se pueden practicar actividades como ciclismo, pesca y senderismo. /El bed and breakfast incluye aire acondicionado, cocina, zona de estar, zona de comedor y TV de pantalla plana con canales vía satélite. Este bed and breakfast proporciona toallas y ropa de cama. /El bed and breakfast sirve un desayuno continental o buffet todas las mañanas. /Lo de Lala B&B con Energía Solar dispone de solárium. /El alojamiento se encuentra a 12 km del aeropuerto Jorge Newbery, el más cercano. Se proporciona servicio de link con el aeropuerto por un adicional.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Depósito de seguridad','Check-out: 10:00 /No se permiten fiestas /No fumar',-34.4423893,-58.666243,'Lo de Lala B&B con Energía Solar',4,11,1),
(9,'Güemes 4500','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','19:00:00','11:00:00','La Casa Celeste está bien situada en el centro de Rosario y ofrece habitaciones con aire acondicionado, bar, wifi gratis y salón compartido. El alojamiento está cerca del centro. Cuenta con recepción 24 horas, cocina compartida y servicio de organización de excursiones. /Todos los alojamientos incluyen ropa de cama.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Depósito de seguridad','Check-out: 15:30 /No fumar',-32.9311617,-60.6645271,'Casa Celeste',4,1,1),
(10,'Villa del Río 568','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','20:00:00','12:00:00','Situado en el centro comercial de San Martín de Los Andes, J&P Hostel está a 500 m del Lago Lácar. Luego de esquiar o pasear, usted podrá gozar de la piscina cubierta climatizada y el sauna. /La señal de Internet puede presentar inestabilidades. /Inicie el día con un desayuno buffet que incluye frutas, cereales, tartas dulces y fiambres, además de medialunas y una selección de bebidas calientes. El restaurante ofrece platos con carnes y pescados, así como pastelería que puede disfrutarse en el lobby, con hogar a leña.La terminal de ómnibus queda a 5 minutos caminando. /Además de recorrer el Camino de los 7 Lagos, los huéspedes podrán visitar el Mirador Bandurria, a 4 km.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Control de temperatura /Depósito de seguridad','Check-out: 15:30 /No fumar',-40.1512772,-71.3540754,'J&P Hostel',2,9,1),
(11,'Ruta Nacional Nº 40 Km 2227','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','16:00:00','13:00:00','El Huentala Hotel se encuentra en el centro de Mendoza. Dispone de piscina al aire libre de temporada, spa y sauna, además de recepción 24h. /El Arbol Duende Hosteria dispone de un bistró que ofrece la opción de media pensión, incluyendo la cena con entrada, plato principal y postre. El desayuno se compone de pasteles, panes, fiambres, dulces y yogures además de una variedad de bebidas calientes y frías. También tiene una bodega propia, donde es posible probar vinos típicos de la región. /La Avenida San Martín se encuentra a 150 m. /La Plaza Independencia está a 500 m. El Casino de la ciudad está a 2 km. /El Parque General San Martín está a 10 minutos en coche. /El Mendoza Plaza Shopping está a 4,5 km del Huentala Hotel. /El Aeropuerto Internacional Gobernador Francisco Gabrielli está a 9 km. /La Terminal de Autobuses está a 1 km.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Depósito de seguridad','Check-out: 15:30 /No fumar',-31.5339672,-68.5170821,'El Arbol Duende Hosteria',2,8,1),
(12,'Calle Rivadavia 1145','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','15:00:00','11:00:00','Departamentos La Vela se encuentra en Ushuaia. Cuenta con wi-fi gratis en zonas comunes y ascensor, además de toallas. /El alojamiento ofrece todos los días el desayuno con costo adicional. /Entre los servicios de la propiedad se encuentran sábanas y calefacción en zonas comunes. /Por un costo adicional, la propiedad cuenta con servicio de traslado al aeropuerto.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Depósito de seguridad','Check-out: 09:00 /No fumar',-54.7999734,-68.3079469,'Departamentos La Vela',4,4,1),
(13,'Gobernador Deloqui 849','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','18:00:00','12:00:00','Los Arboles Apart se sitúa en Ushuaia. Ofrece wi-fi gratis en zonas comunes, servicio de guarda-equipaje gratis y ascensor, además de servicio de lavandería gratis. /Entre las comodidades se destacan toallas, sábanas, recepción con horario limitado y calefacción en zonas comunes. La propiedad cuenta con servicio de lavandería.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Recepción con horario limitado /Depósito de seguridad','Check-out: 09:00 /No fumar',-54.8067474,-68.3147881,'Los Arboles Apart',4,4,1),
(14,'Pcia Grande 519','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','15:00:00','11:00:00','Cabañas Las Aguilas se encuentra en Ushuaia, a 5 minutos en coche del Centro y a 10 minutos del aeropuerto local, y a 100 m de la Laguna del Diablo. El establecimiento dispone de Wi-Fi gratis y estacionamiento gratis. /La cabaña incluye anafe, refrigerador, microondas y mesa de comedor, además de sala de estar y calefacción. El baño es privado y esta equipado con bañera, secador de cabello y amenidades. /La propiedad cuenta con caja fuerte, consigna de equipaje y depósito de esquíes. También hay juegos de mesa y TV por cable.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Recepción con horario limitado /Depósito de seguridad','Check-out: 09:00 /No fumar',-54.8149189,-68.3438356,'Cabañas Las Aguilas',3,4,1),
(15,'Primitivo De La Reta 989','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','16:00:00','13:00:00','Ubicado en el centro de la ciudad, Estrella Departamentos se sitúa a 5 minutos a pie de la Plaza Independencia, a 300 m del paseo peatonal Sarmiento y a 20 minutos en auto del Aeropuerto Internacional Gobernador Francisco Gabrielli. Dispone de personal en recepción listo para brindarle asistencia, piscina climatizada e hidromasaje. /En el espacio fitness Neptune los huéspedes pueden relajarse en la piscina interior, tomar baños de vapor, utilizar el sauna o ejercitarse en el gimnasio. Cuenta con casino, centro de negocios, conexión Wi-Fi gratuita y estacionamiento por un costo adicional. /Alberga el Restaurante Acequias, que se especializa en gastronomía regional y vinos mendocinos, ofrece desayuno buffet. La oferta del Lounge y Restaurante Mirador es de cocina internacional mientras que el Lobby Bar Devas es ideal para refrigerios. /La propiedad se encuentra a 10 minutos en auto del Mendoza Plaza Shopping y a 2 km del Acceso Sur de la ciudad, que conecta con Chacras de Coria y los viñedos de Mendoza.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Recepción con horario limitado','Check-out: 11:00 /No se permiten mascotas /No fumar',-40.7571074,-71.6653328,'Estrella Departamentos',3,7,1),
(16,'Av. Rivadavia 5076','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','16:00:00','13:00:00','Dos Gotas se sitúa en Buenos Aires. Ofrece wi-fi gratis en zonas comunes, servicio de guarda-equipaje gratis y ascensor, además de servicio de lavandería gratis. /Entre las comodidades se destacan toallas, sábanas, recepción con horario limitado y calefacción en zonas comunes. La propiedad cuenta con servicio de lavandería.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Recepción con horario limitado /Depósito de seguridad','Check-out: 16:00 /No se permiten fiestas /No fumar',-34.6189344,-58.4396022,'Dos gotas',4,11,1),
(17,'San Lorenzo 660','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.','19:00:00','12:00:00','Amerian Executive Mendoza se encuentra en Mendoza. Dispone de piscina al aire libre todo el año, wi-fi gratis en zonas comunes y sauna, así como cancha de tenis. /El alojamiento sirve diariamente el desayuno, el cual se ofrece en el restaurante. También dispone de bar. /Entre los servicios de la propiedad se encuentran campo de golf, gimnasio, recepción 24 hrs y centro de negocios. Los huéspedes también podrán disfrutar de sala de reuniones y seguridad 24 hrs. Por un suplemento, la propiedad cuenta con internet por cable  en zonas comunes y servicio de lavandería.','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus /Detector de humo /Recepción con horario limitado /Depósito de seguridad','Check-out: 10:00 /No se permiten mascotas /No fumar',-34.6237741,-68.3346525,'Amerian Executive Mendoza',2,8,1);

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` (`title`,`url_image`,`product_id`) VALUES
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/128932652.jpg?k=a35029cdb40ab3ef447714036b24e9da31a1abe2c5aca1db0a09d5329f438f8d&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/128958197.jpg?k=071254f5fc877699c4f3f7e239cb8637249649d6dbb48a45a4504eced8c7b55b&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/128956494.jpg?k=cb89763f08cb83318344f65825b4518b064ac6cf14f1504031ba0dcdd5698567&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/128929893.jpg?k=afa9ddb6ca36df41382979e8dc666e55764cb37829a5fc5fa3767b3be79914fc&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/128941931.jpg?k=d2f2c9a6f16c2d90bd1b85a7df7a96e2959d9f3826c0aeadadb5f5d59042cc6a&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/52068359.jpg?k=46bfe5cfa9c3dce067b57e5a2fe6cbc71c0246981171881e79ebaa2b00a83979&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/46006293.jpg?k=c150f8ac79a3e3c44644208c926899b88f60dc6228cc344f3cec5d89366e4db6&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/46006291.jpg?k=fedbb091d6141c9568e9a311f4f5fe9694cd562262e82bcb688cf5586b4ff2ea&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/46006294.jpg?k=71603e4fafc5d6560139ab6389ecf13a37983e8ad1bc4addffb9f157fbe0a29c&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/52069572.jpg?k=2c0a831cc4dbc98dce14f9ef8064fa0f1eab18452f034631208f01e14aa7671a&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/52070211.jpg?k=04eeb78a4c8dfda6bc86ae5bce8faca9ddeb6a120a8af035682ea2028097cd8d&o=&hp=1',1),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/330746627.jpg?k=947e2c7be88f624922c87bfcbab37ecfbdccef002575f5c9e1f86cf619725a4e&o=&hp=1',1),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/166442884.jpg?k=f038e53f71b03089fec79040cc5504bbc2ddf1d5769325d855baf665fc8fa67e&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',2),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',2),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371727.jpg?k=5a7de815d60c4cb9e6e7f1987503ac128fc5cc5433b2978a0e5fcb75cae453fb&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371698.jpg?k=12ded7e72db487e4a9d44d2abc738cd079e7b1812622b93682bfb27718d0d0e9&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371479.jpg?k=48adf9e9db3ff9b68c13e08d456841b64f5a54684df3834bcba95b2d4161669a&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/253077804.jpg?k=7e097037e3ff0dbb51d1b76028d39059f202a067ecbac8be5c205e241b8ffdca&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/13234271.jpg?k=a64554d3ce21936ead126b8c4650e3ca03200ade2d7f6989dedfe9c03da82685&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073545.jpg?k=db0585e6baa68a7e0d23683333c7d7f2a7ec18cf94e6584583f572dccc3fea3f&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371270.jpg?k=2f17a2b15e0d7a184ffd43064de5b42e152d8f869d0cfa442f348c4280f746f1&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53372216.jpg?k=4b8a570a7a461910b42acb86a52cfc1838fa03f8d831b8f369db84274d622589&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371445.jpg?k=e857b7759ab2604ae7f981adbae2db0e87bfabc77edac788ba4a7ddb4ad9ea7c&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371866.jpg?k=97ca1d1fd641aa79e0e1c9a2234b796823fdbed7ba8113845ddd44103db1e4de&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371607.jpg?k=15cb28e371deba982f91a072d65e4f89964e1cafdf18a7e99a5f196a7eb99f8d&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371593.jpg?k=4ead376e0c52a3fb9bd4a60ea06fe4d43099c19410ad2388d9141b029b17c72d&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371170.jpg?k=22e917720040a3dc4d85787bdaa7ac15cb81efd9bc744be2d82f7b6b324fe0a7&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371728.jpg?k=f81cf44b35971bdf589d1f4bf69d60554fe3f4fbc6850b8a0687f66ca589dedb&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371828.jpg?k=fe628e50cb73b4272a6c8e9912fb64a2001966f087f8e20dceb2910d96522245&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371916.jpg?k=1a4802050712c7163d0d60484eb637ca9e26e42a541a15b13d7ffec938e7c414&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073667.jpg?k=b0b1b3da5879109c7c93a88f7ccec8d4cbb89549189eb640ba8f6d63f0a0e84d&o=&hp=1',3),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371941.jpg?k=df2402f56bb217d4dc31b2bf57305f186c43c4d25daab529b21c2dbd989fb995&o=&hp=1',3),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/12856179.jpg?k=e683d0e1dc47c513e9ece826affd0d136e1328c1b24c9a7c96c2dc560860569d&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371698.jpg?k=12ded7e72db487e4a9d44d2abc738cd079e7b1812622b93682bfb27718d0d0e9&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371479.jpg?k=48adf9e9db3ff9b68c13e08d456841b64f5a54684df3834bcba95b2d4161669a&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/253077804.jpg?k=7e097037e3ff0dbb51d1b76028d39059f202a067ecbac8be5c205e241b8ffdca&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/13234271.jpg?k=a64554d3ce21936ead126b8c4650e3ca03200ade2d7f6989dedfe9c03da82685&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073545.jpg?k=db0585e6baa68a7e0d23683333c7d7f2a7ec18cf94e6584583f572dccc3fea3f&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371270.jpg?k=2f17a2b15e0d7a184ffd43064de5b42e152d8f869d0cfa442f348c4280f746f1&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53372216.jpg?k=4b8a570a7a461910b42acb86a52cfc1838fa03f8d831b8f369db84274d622589&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371445.jpg?k=e857b7759ab2604ae7f981adbae2db0e87bfabc77edac788ba4a7ddb4ad9ea7c&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371866.jpg?k=97ca1d1fd641aa79e0e1c9a2234b796823fdbed7ba8113845ddd44103db1e4de&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371607.jpg?k=15cb28e371deba982f91a072d65e4f89964e1cafdf18a7e99a5f196a7eb99f8d&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371593.jpg?k=4ead376e0c52a3fb9bd4a60ea06fe4d43099c19410ad2388d9141b029b17c72d&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371170.jpg?k=22e917720040a3dc4d85787bdaa7ac15cb81efd9bc744be2d82f7b6b324fe0a7&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371728.jpg?k=f81cf44b35971bdf589d1f4bf69d60554fe3f4fbc6850b8a0687f66ca589dedb&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371828.jpg?k=fe628e50cb73b4272a6c8e9912fb64a2001966f087f8e20dceb2910d96522245&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371916.jpg?k=1a4802050712c7163d0d60484eb637ca9e26e42a541a15b13d7ffec938e7c414&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073667.jpg?k=b0b1b3da5879109c7c93a88f7ccec8d4cbb89549189eb640ba8f6d63f0a0e84d&o=&hp=1',4),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371941.jpg?k=df2402f56bb217d4dc31b2bf57305f186c43c4d25daab529b21c2dbd989fb995&o=&hp=1',4),
('main','https://cf.bstatic.com/xdata/images/hotel/max1280x900/312371592.jpg?k=acd6f4eb2820845f397a7ed61fd82ae95aaaf5480ca8b8861859b7f8eb8abd8f&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371698.jpg?k=12ded7e72db487e4a9d44d2abc738cd079e7b1812622b93682bfb27718d0d0e9&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371479.jpg?k=48adf9e9db3ff9b68c13e08d456841b64f5a54684df3834bcba95b2d4161669a&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/253077804.jpg?k=7e097037e3ff0dbb51d1b76028d39059f202a067ecbac8be5c205e241b8ffdca&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/13234271.jpg?k=a64554d3ce21936ead126b8c4650e3ca03200ade2d7f6989dedfe9c03da82685&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073545.jpg?k=db0585e6baa68a7e0d23683333c7d7f2a7ec18cf94e6584583f572dccc3fea3f&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371270.jpg?k=2f17a2b15e0d7a184ffd43064de5b42e152d8f869d0cfa442f348c4280f746f1&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53372216.jpg?k=4b8a570a7a461910b42acb86a52cfc1838fa03f8d831b8f369db84274d622589&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371445.jpg?k=e857b7759ab2604ae7f981adbae2db0e87bfabc77edac788ba4a7ddb4ad9ea7c&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371866.jpg?k=97ca1d1fd641aa79e0e1c9a2234b796823fdbed7ba8113845ddd44103db1e4de&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371607.jpg?k=15cb28e371deba982f91a072d65e4f89964e1cafdf18a7e99a5f196a7eb99f8d&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371593.jpg?k=4ead376e0c52a3fb9bd4a60ea06fe4d43099c19410ad2388d9141b029b17c72d&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371170.jpg?k=22e917720040a3dc4d85787bdaa7ac15cb81efd9bc744be2d82f7b6b324fe0a7&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371728.jpg?k=f81cf44b35971bdf589d1f4bf69d60554fe3f4fbc6850b8a0687f66ca589dedb&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371828.jpg?k=fe628e50cb73b4272a6c8e9912fb64a2001966f087f8e20dceb2910d96522245&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371916.jpg?k=1a4802050712c7163d0d60484eb637ca9e26e42a541a15b13d7ffec938e7c414&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073667.jpg?k=b0b1b3da5879109c7c93a88f7ccec8d4cbb89549189eb640ba8f6d63f0a0e84d&o=&hp=1',5),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371941.jpg?k=df2402f56bb217d4dc31b2bf57305f186c43c4d25daab529b21c2dbd989fb995&o=&hp=1',5),
('main','https://cf.bstatic.com/xdata/images/hotel/max1280x900/351492656.jpg?k=22cb0b83018e24d3e75215c1651155153c345498b29475f2f6af72b947c08644&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371698.jpg?k=12ded7e72db487e4a9d44d2abc738cd079e7b1812622b93682bfb27718d0d0e9&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371479.jpg?k=48adf9e9db3ff9b68c13e08d456841b64f5a54684df3834bcba95b2d4161669a&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/253077804.jpg?k=7e097037e3ff0dbb51d1b76028d39059f202a067ecbac8be5c205e241b8ffdca&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/13234271.jpg?k=a64554d3ce21936ead126b8c4650e3ca03200ade2d7f6989dedfe9c03da82685&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073545.jpg?k=db0585e6baa68a7e0d23683333c7d7f2a7ec18cf94e6584583f572dccc3fea3f&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371270.jpg?k=2f17a2b15e0d7a184ffd43064de5b42e152d8f869d0cfa442f348c4280f746f1&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53372216.jpg?k=4b8a570a7a461910b42acb86a52cfc1838fa03f8d831b8f369db84274d622589&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371445.jpg?k=e857b7759ab2604ae7f981adbae2db0e87bfabc77edac788ba4a7ddb4ad9ea7c&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371866.jpg?k=97ca1d1fd641aa79e0e1c9a2234b796823fdbed7ba8113845ddd44103db1e4de&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371607.jpg?k=15cb28e371deba982f91a072d65e4f89964e1cafdf18a7e99a5f196a7eb99f8d&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371593.jpg?k=4ead376e0c52a3fb9bd4a60ea06fe4d43099c19410ad2388d9141b029b17c72d&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371170.jpg?k=22e917720040a3dc4d85787bdaa7ac15cb81efd9bc744be2d82f7b6b324fe0a7&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371728.jpg?k=f81cf44b35971bdf589d1f4bf69d60554fe3f4fbc6850b8a0687f66ca589dedb&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371828.jpg?k=fe628e50cb73b4272a6c8e9912fb64a2001966f087f8e20dceb2910d96522245&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371916.jpg?k=1a4802050712c7163d0d60484eb637ca9e26e42a541a15b13d7ffec938e7c414&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073667.jpg?k=b0b1b3da5879109c7c93a88f7ccec8d4cbb89549189eb640ba8f6d63f0a0e84d&o=&hp=1',6),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371941.jpg?k=df2402f56bb217d4dc31b2bf57305f186c43c4d25daab529b21c2dbd989fb995&o=&hp=1',6),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/258961262.jpg?k=95d09ec3b7933d3aa39d119cbf9fcf3970ea9df6e6c75d7b01903f2f4bfd79c6&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371698.jpg?k=12ded7e72db487e4a9d44d2abc738cd079e7b1812622b93682bfb27718d0d0e9&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371479.jpg?k=48adf9e9db3ff9b68c13e08d456841b64f5a54684df3834bcba95b2d4161669a&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/253077804.jpg?k=7e097037e3ff0dbb51d1b76028d39059f202a067ecbac8be5c205e241b8ffdca&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/13234271.jpg?k=a64554d3ce21936ead126b8c4650e3ca03200ade2d7f6989dedfe9c03da82685&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073545.jpg?k=db0585e6baa68a7e0d23683333c7d7f2a7ec18cf94e6584583f572dccc3fea3f&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371270.jpg?k=2f17a2b15e0d7a184ffd43064de5b42e152d8f869d0cfa442f348c4280f746f1&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53372216.jpg?k=4b8a570a7a461910b42acb86a52cfc1838fa03f8d831b8f369db84274d622589&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371445.jpg?k=e857b7759ab2604ae7f981adbae2db0e87bfabc77edac788ba4a7ddb4ad9ea7c&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371866.jpg?k=97ca1d1fd641aa79e0e1c9a2234b796823fdbed7ba8113845ddd44103db1e4de&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371607.jpg?k=15cb28e371deba982f91a072d65e4f89964e1cafdf18a7e99a5f196a7eb99f8d&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371593.jpg?k=4ead376e0c52a3fb9bd4a60ea06fe4d43099c19410ad2388d9141b029b17c72d&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371170.jpg?k=22e917720040a3dc4d85787bdaa7ac15cb81efd9bc744be2d82f7b6b324fe0a7&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371728.jpg?k=f81cf44b35971bdf589d1f4bf69d60554fe3f4fbc6850b8a0687f66ca589dedb&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371828.jpg?k=fe628e50cb73b4272a6c8e9912fb64a2001966f087f8e20dceb2910d96522245&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371916.jpg?k=1a4802050712c7163d0d60484eb637ca9e26e42a541a15b13d7ffec938e7c414&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073667.jpg?k=b0b1b3da5879109c7c93a88f7ccec8d4cbb89549189eb640ba8f6d63f0a0e84d&o=&hp=1',7),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371941.jpg?k=df2402f56bb217d4dc31b2bf57305f186c43c4d25daab529b21c2dbd989fb995&o=&hp=1',7),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/215424197.jpg?k=208eaa8a4b181e15442438edd17ae1dfb4d7f7aabab2554eebdffd12e123c8c9&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371698.jpg?k=12ded7e72db487e4a9d44d2abc738cd079e7b1812622b93682bfb27718d0d0e9&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371479.jpg?k=48adf9e9db3ff9b68c13e08d456841b64f5a54684df3834bcba95b2d4161669a&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/253077804.jpg?k=7e097037e3ff0dbb51d1b76028d39059f202a067ecbac8be5c205e241b8ffdca&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/13234271.jpg?k=a64554d3ce21936ead126b8c4650e3ca03200ade2d7f6989dedfe9c03da82685&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073545.jpg?k=db0585e6baa68a7e0d23683333c7d7f2a7ec18cf94e6584583f572dccc3fea3f&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371270.jpg?k=2f17a2b15e0d7a184ffd43064de5b42e152d8f869d0cfa442f348c4280f746f1&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53372216.jpg?k=4b8a570a7a461910b42acb86a52cfc1838fa03f8d831b8f369db84274d622589&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371445.jpg?k=e857b7759ab2604ae7f981adbae2db0e87bfabc77edac788ba4a7ddb4ad9ea7c&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371866.jpg?k=97ca1d1fd641aa79e0e1c9a2234b796823fdbed7ba8113845ddd44103db1e4de&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371607.jpg?k=15cb28e371deba982f91a072d65e4f89964e1cafdf18a7e99a5f196a7eb99f8d&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371593.jpg?k=4ead376e0c52a3fb9bd4a60ea06fe4d43099c19410ad2388d9141b029b17c72d&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371170.jpg?k=22e917720040a3dc4d85787bdaa7ac15cb81efd9bc744be2d82f7b6b324fe0a7&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371728.jpg?k=f81cf44b35971bdf589d1f4bf69d60554fe3f4fbc6850b8a0687f66ca589dedb&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371828.jpg?k=fe628e50cb73b4272a6c8e9912fb64a2001966f087f8e20dceb2910d96522245&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371916.jpg?k=1a4802050712c7163d0d60484eb637ca9e26e42a541a15b13d7ffec938e7c414&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/176073667.jpg?k=b0b1b3da5879109c7c93a88f7ccec8d4cbb89549189eb640ba8f6d63f0a0e84d&o=&hp=1',8),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/53371941.jpg?k=df2402f56bb217d4dc31b2bf57305f186c43c4d25daab529b21c2dbd989fb995&o=&hp=1',8),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/42945394.jpg?k=9331eba51a382a5d2eebe20b720bd11d2ae1517ce345c2e166fe31bf62d16e3d&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',9),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',9),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/266002914.jpg?k=c9e9c429ba8cc211811658f3de549374297415d666bb937865e44e4784dcb07d&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',10),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',10),
('main','https://cf.bstatic.com/xdata/images/hotel/max1280x900/105127522.jpg?k=953ab0e3764513f1a1489921efcda78b32e45cef0441c8aa9be3fb717f68c9ab&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',11),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',11),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/274061918.jpg?k=d4e8d97b86082901f42259085b6c329c00c40751fd18795f0910470e1aaa77db&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',12),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',12),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/228867281.jpg?k=f37225bdafa2ba8c8c813197155c389309713d9a58304b9b8860f067e60c94a6&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',13),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',13),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/24142051.jpg?k=55e8db3690bf9697890e30a3643ed927345afb186e527208359fae3643897dad&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',14),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',14),
('main','https://cf.bstatic.com/xdata/images/hotel/max1280x900/315960065.jpg?k=9e9bf044a7968d89e1bf0cc7392a1a1158b62eb24b5ae840ec84396c292e9341&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',15),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',15),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/334675067.jpg?k=582eee5e78a833563e0c6a78ce0aa7b7568d75dcbde8d91cebbaae4df39fa314&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',16),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',16),
('main','https://cf.bstatic.com/xdata/images/hotel/max1024x768/206210490.jpg?k=ba9e1db94c8dfeace957f58eeee0fe7b952969eb328ba41e6e62e9913ab135db&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112547.jpg?k=80764bd4114fc8916c439c341bf0c44f5c67060daad07f37284a323100f2de7d&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/142104783.jpg?k=9478cf6c77bad9cef04b1a4948a5c485470f9e3116156c7d440c47e941faf6ce&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112598.jpg?k=5a199703aff45682be3d5a4aa8b2da2a166118f0d8405a327c5ac365332a07ed&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332775.jpg?k=76d1784f258f78dac5b25e2b252dad14d9f443e1a633e75a7ca359c7fed9b4a1&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112601.jpg?k=dda51784ee7d19f206c6ae4714fc04eadba83f884ef9be1c849a1aaf84896b1c&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112586.jpg?k=ba918bd636004efa46b1e57e9c6d8cfec18d8493bcf5618dcbbd57a617f5f675&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332789.jpg?k=39e76ecf3bc5a8fd84698fada6aa198e505bb1d8a75aadb0ed885099033304fc&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332797.jpg?k=4fa39c38e5e4a913ea219ec238b5467d13fe6c74660db250b5e6776d2276e005&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332651.jpg?k=f03eb3c9325778b4d056414f72dd714c77384643a637560479220629fc2f2197&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332581.jpg?k=be27f4900b9399949fa62af2a26081b57094fffef24704da6cc02abf374a1ae0&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112580.jpg?k=2290f42928d9e2a82d5c00684be81f33bd7133ff9c4fab3a42b030f184018f88&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112576.jpg?k=461460ed43ecbb71050bc121edb46e7298a5836bd4256244b7b74e0f28ee3c74&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112545.jpg?k=2c39199691eaba90c6ad7ec24f06416b31ec2ee4111bcb251c11712e2e091d19&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112549.jpg?k=77e27dd5d0ce5b6b42e7cb7e44256b5db4952c84123a5f13c6411fd3744d87fa&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112511.jpg?k=61a6da09e93e7e93e2cd02a203554741f706231ebd0c49d130abf5f4e92557e1&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112518.jpg?k=c6ae764531f21202a633b99e8839dd606358c7d403f51a2329ece0e4ff3cdcfd&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112520.jpg?k=ea452b167ee9f45a7310013a95e9073cd0e7f15582524e3795435e7c2ada6f77&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112522.jpg?k=5cc7dcec95ff67af557eda160d725b06d790a020ed15750902d78d327f26908b&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/192332784.jpg?k=64aa6b56a0fc8ab651f8410796e7999714469c77868e6b0385aa584911b81f1d&o=&hp=1',17),
('other','https://cf.bstatic.com/xdata/images/hotel/max1024x768/139112523.jpg?k=123d0fc49facd0afa87c812751c47a5d53c269f6cebf70ff1eb7b9c4631f4db0&o=&hp=1',17);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products_characteristics`
--

LOCK TABLES `products_characteristics` WRITE;
/*!40000 ALTER TABLE `products_characteristics` DISABLE KEYS */;
INSERT INTO `products_characteristics` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(3,2),(3,3),(3,4),(3,5),(3,6),(3,8),(3,9),(4,1),(4,2),(4,3),(4,4),(4,5),(4,8),(4,10),(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(5,7),(6,1),(6,2),(6,3),(6,4),(6,5),(6,6),(7,2),(7,3),(7,4),(7,5),(7,6),(7,8),(7,9),(8,1),(8,2),(8,3),(8,4),(8,5),(8,8),(8,10),(9,1),(9,5),(9,6),(9,9),(10,1),(10,2),(10,3),(10,4),(10,5),(10,6),(11,1),(11,2),(11,3),(11,4),(11,5),(11,9),(11,10),(12,1),(12,7),(12,3),(12,4),(12,9),(12,6),(13,1),(13,2),(13,3),(13,4),(13,5),(13,6),(14,10),(14,2),(14,3),(14,4),(14,5),(15,1),(15,2),(15,3),(15,4),(15,5),(15,8),(15,9),(16,1),(16,2),(16,3),(16,4),(16,5),(16,8),(16,9),(17,1),(17,2),(17,3),(17,4),(17,5),(17,8),(17,9);
/*!40000 ALTER TABLE `products_characteristics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;



INSERT INTO `bookings` VALUES
(1,'2022-06-30 01:01:56','2022-08-10','2022-08-01',1,2),
(2,'2022-07-01 00:00:01','2022-07-05','2022-07-02',2,2),
--(3,'2022-07-01 00:00:01','2022-08-10','2022-08-01',2,2),
(4,'2022-06-30 01:02:07','2022-08-10','2022-08-01',3,2),
(5,'2022-06-30 01:02:11','2022-08-10','2022-08-01',4,2),
(6,'2022-06-30 01:02:14','2022-08-10','2022-08-01',5,2),
(7,'2022-06-30 01:02:18','2022-08-10','2022-08-01',6,2),
(8,'2022-06-30 01:02:21','2022-08-10','2022-08-01',7,2),
(9,'2022-06-30 01:02:24','2022-08-10','2022-08-01',8,2),
(10,'2022-06-30 01:02:24','2022-08-10','2022-08-01',9,2),
(11,'2022-06-30 01:02:42','2022-08-10','2022-08-01',10,2),
(12,'2022-06-30 01:02:48','2022-08-10','2022-08-01',11,2),
(13,'2022-06-30 01:03:02','2022-08-10','2022-08-01',12,2);

INSERT INTO `stars` VALUES (1, 3, 2);

INSERT INTO `products_stars` VALUES (1,1);

CREATE
    ALGORITHM = UNDEFINED
    DEFINER = `root`@`localhost`
    SQL SECURITY DEFINER
VIEW `productview` AS
    SELECT
        `products`.`id` AS `id`,
        `products`.`name` AS `name`,
        `products`.`description` AS `description`,
        `categories`.`title` AS `category`,
        `cities`.`name` AS `city`,
        `images`.`url_image` AS `url`
    FROM
        (((`products`
        JOIN `categories` ON ((`products`.`category_id` = `categories`.`id`)))
        JOIN `images` ON (((`images`.`title` LIKE '%main%')
            AND (`images`.`product_id` = `products`.`id`))))
        LEFT JOIN `cities` ON ((`cities`.`id` = `products`.`city_id`)));
--    ORDER BY RAND();

CREATE
    ALGORITHM = UNDEFINED
    DEFINER = `root`@`localhost`
    SQL SECURITY DEFINER
VIEW `characteristicsview` AS
    SELECT
        `products_characteristics`.`product_id` AS `product_id`,
        `characteristics`.`id` AS `id`,
        `characteristics`.`icon` AS `icon`,
        `characteristics`.`name` AS `name`
    FROM
        (`products_characteristics`
        LEFT JOIN `characteristics` ON ((`characteristics`.`id` = `products_characteristics`.`characteristic_id`)));

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;