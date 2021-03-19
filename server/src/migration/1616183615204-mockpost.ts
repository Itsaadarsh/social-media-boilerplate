import { MigrationInterface, QueryRunner } from 'typeorm';

export class mockpost1616183615204 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into post (title, text, "creatorID", "createdAt") values ('Jetta', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 3, '2020-04-13T08:35:21Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Rodeo Sport', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3, '2020-04-30T11:37:04Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Cooper', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
        Fusce consequat. Nulla nisl. Nunc nisl.', 3, '2020-11-03T16:53:18Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Forester', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
        
        Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 3, '2020-10-06T12:04:38Z');
        insert into post (title, text, "creatorID", "createdAt") values ('600SEL', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 3, '2020-10-15T12:32:42Z');
        insert into post (title, text, "creatorID", "createdAt") values ('C-Class', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3, '2021-01-04T09:43:36Z');
        insert into post (title, text, "creatorID", "createdAt") values ('LeSabre', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 3, '2021-01-15T11:13:06Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Accent', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 3, '2021-02-12T21:37:27Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Gemini', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.
        
        Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 3, '2020-10-15T09:43:01Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Malibu', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
        
        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 3, '2020-10-20T02:10:48Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Altima', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 3, '2021-03-18T00:00:40Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Suburban 2500', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 3, '2020-11-16T05:03:58Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Grand Prix', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 3, '2020-09-21T14:26:10Z');
        insert into post (title, text, "creatorID", "createdAt") values ('H2', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 3, '2020-05-13T18:08:26Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Yukon', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3, '2020-10-12T13:11:27Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Tucson', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 3, '2020-06-05T18:17:50Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Town Car', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
        
        Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 3, '2021-02-11T15:49:05Z');
        insert into post (title, text, "creatorID", "createdAt") values ('9-5', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 3, '2020-04-23T13:39:14Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Trans Sport', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 3, '2020-09-03T07:33:03Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Frontier', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 3, '2020-11-02T01:56:02Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Elantra', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 3, '2020-12-24T15:36:30Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Type 2', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 3, '2020-08-05T06:12:14Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Parisienne', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 3, '2020-11-15T11:40:33Z');
        insert into post (title, text, "creatorID", "createdAt") values ('G', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 3, '2020-08-12T17:19:07Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Cayman', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 3, '2021-02-10T03:21:11Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Range Rover', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 3, '2021-01-15T12:13:26Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Avalon', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
        In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 3, '2021-02-13T00:04:57Z');
        insert into post (title, text, "creatorID", "createdAt") values ('900', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
        Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 3, '2020-11-11T10:06:29Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Equinox', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
        
        Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 3, '2020-12-21T10:00:08Z');
        insert into post (title, text, "creatorID", "createdAt") values ('CR-V', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 3, '2020-10-30T01:00:01Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Town & Country', 'Fusce consequat. Nulla nisl. Nunc nisl.
        
        Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 3, '2020-07-07T00:38:55Z');
        insert into post (title, text, "creatorID", "createdAt") values ('9-5', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 3, '2021-02-20T03:18:45Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Armada', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
        
        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 3, '2020-09-18T11:15:45Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Mazda6', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 3, '2020-12-09T10:10:23Z');
        insert into post (title, text, "creatorID", "createdAt") values ('H1', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 3, '2021-03-03T21:01:09Z');
        insert into post (title, text, "creatorID", "createdAt") values ('MPV', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3, '2020-06-27T21:46:26Z');
        insert into post (title, text, "creatorID", "createdAt") values ('F-Series', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 3, '2021-01-16T13:50:40Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Taurus', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
        Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 3, '2020-12-06T13:55:41Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Lumina', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        
        Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 3, '2020-10-13T18:27:15Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Explorer Sport Trac', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 3, '2020-09-21T17:17:44Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Altima', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3, '2020-11-08T22:38:20Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Yukon XL 2500', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 3, '2020-09-25T19:39:46Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Firebird Trans Am', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 3, '2020-09-29T14:54:32Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Nuova 500', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
        Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 3, '2021-02-02T05:30:21Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Sephia', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 3, '2020-04-23T23:56:31Z');
        insert into post (title, text, "creatorID", "createdAt") values ('200SX', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 3, '2020-10-02T08:18:33Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Sportage', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 3, '2020-08-28T08:09:09Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Firebird', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 3, '2021-02-25T08:23:25Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Fox', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3, '2020-12-04T18:34:34Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Pajero', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 3, '2020-09-11T09:13:36Z');
        insert into post (title, text, "creatorID", "createdAt") values ('B-Series Plus', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 3, '2020-07-17T09:23:07Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Alero', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 3, '2020-09-17T05:40:38Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Venza', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3, '2020-06-26T04:23:05Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Laser', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 3, '2021-02-01T21:11:12Z');
        insert into post (title, text, "creatorID", "createdAt") values ('5 Series', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
        
        Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3, '2020-09-27T06:15:58Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Tribeca', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 3, '2020-10-11T19:23:11Z');
        insert into post (title, text, "creatorID", "createdAt") values ('DeVille', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.', 3, '2020-09-23T16:03:14Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Mark VIII', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 3, '2020-09-20T15:49:16Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Caprice', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.
        
        Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 3, '2021-01-07T02:15:34Z');
        insert into post (title, text, "creatorID", "createdAt") values ('8 Series', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
        Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 3, '2021-01-30T02:32:45Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Crown Victoria', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
        Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 3, '2020-04-06T14:50:36Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Mazda5', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
        Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3, '2021-03-01T17:03:03Z');
        insert into post (title, text, "creatorID", "createdAt") values ('ES', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 3, '2020-03-23T23:45:48Z');
        insert into post (title, text, "creatorID", "createdAt") values ('C8 Double 12 S', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3, '2021-01-09T22:45:43Z');
        insert into post (title, text, "creatorID", "createdAt") values ('ES', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 3, '2020-07-12T22:41:52Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Explorer', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
        Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 3, '2020-12-17T09:18:08Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Econoline E150', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 3, '2020-03-31T04:01:08Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Eclipse', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 3, '2020-07-13T05:21:27Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Journey', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
        
        Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 3, '2021-01-23T16:53:39Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Fortwo', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
        
        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 3, '2020-07-17T14:21:17Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Volare', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
        Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 3, '2021-01-26T19:19:16Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Celica', 'Fusce consequat. Nulla nisl. Nunc nisl.', 3, '2020-05-21T18:13:26Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Highlander', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
        Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 3, '2020-10-12T02:31:22Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Intrepid', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3, '2020-10-02T10:43:43Z');
        insert into post (title, text, "creatorID", "createdAt") values ('RVR', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
        Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 3, '2020-10-04T11:47:54Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Sierra 2500', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
        
        Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 3, '2020-12-12T04:38:01Z');
        insert into post (title, text, "creatorID", "createdAt") values ('A5', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
        
        Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 3, '2021-02-01T15:35:24Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Park Avenue', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
        
        Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 3, '2020-08-05T21:22:42Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Taurus', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
        
        Phasellus in felis. Donec semper sapien a libero. Nam dui.', 3, '2021-02-21T23:32:38Z');
        insert into post (title, text, "creatorID", "createdAt") values ('S40', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.
        
        Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 3, '2020-05-24T03:16:17Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Grand Caravan', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
        
        Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 3, '2020-11-10T06:51:11Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Crown Victoria', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 3, '2021-02-10T00:24:37Z');
        insert into post (title, text, "creatorID", "createdAt") values ('GT-R', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 3, '2020-08-06T01:23:30Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Crossfire', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3, '2021-01-24T07:08:12Z');
        insert into post (title, text, "creatorID", "createdAt") values ('M', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 3, '2020-08-13T08:28:33Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Outlander', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3, '2020-07-03T19:23:22Z');
        insert into post (title, text, "creatorID", "createdAt") values ('RX-7', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 3, '2020-12-30T05:31:04Z');
        insert into post (title, text, "creatorID", "createdAt") values ('HHR', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 3, '2020-05-25T16:44:17Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Cabriolet', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 3, '2020-04-09T13:17:21Z');
        insert into post (title, text, "creatorID", "createdAt") values ('S-Type', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 3, '2020-09-13T07:39:38Z');
        insert into post (title, text, "creatorID", "createdAt") values ('CR-V', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.
        
        Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 3, '2020-04-08T19:51:58Z');
        insert into post (title, text, "creatorID", "createdAt") values ('MR2', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
        
        Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 3, '2021-03-17T03:47:57Z');
        insert into post (title, text, "creatorID", "createdAt") values ('928', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 3, '2020-06-21T10:01:31Z');
        insert into post (title, text, "creatorID", "createdAt") values ('F-Series', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 3, '2020-05-17T09:32:18Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Probe', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
        
        Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 3, '2020-07-15T18:14:17Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Electra', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 3, '2021-03-10T23:34:11Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Celica', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 3, '2021-01-06T02:05:06Z');
        insert into post (title, text, "creatorID", "createdAt") values ('2500', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
        
        Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 3, '2020-11-12T09:21:40Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Grand Cherokee', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 3, '2020-07-22T08:48:44Z');
        insert into post (title, text, "creatorID", "createdAt") values ('Suburban 2500', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
        Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 3, '2020-04-08T16:16:22Z');`);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
