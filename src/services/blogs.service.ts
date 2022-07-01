

class BlogService {
    private serviceUrl = '';

    static GetBlogList = async () => {
        const data = {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            content: `<div id="lipsum">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ex rhoncus, laoreet elit sit amet, dictum nisi. Suspendisse consectetur nec tellus vitae pellentesque. Nullam consectetur ligula vitae nisl aliquam, in dignissim nunc vestibulum. Vivamus facilisis in orci id blandit. Vestibulum a hendrerit ligula. Maecenas et dolor libero. Vivamus at dolor quam. Donec feugiat nisl vitae nisi ultrices porttitor. Vivamus in nulla pulvinar, tempor augue at, fermentum turpis. Quisque congue lorem at dolor pretium tincidunt.
            </p>
            <p>
            Fusce mollis enim elementum diam elementum, vitae mollis lacus aliquet. Quisque felis nulla, laoreet vel semper blandit, euismod ut sem. In molestie a tellus sed lacinia. Aenean porta diam augue, eget consectetur urna maximus at. Morbi pretium at justo et condimentum. Sed felis nisl, gravida non lorem ut, dapibus dictum purus. Nulla semper tellus at sapien congue, eu dictum orci condimentum. Sed tempus massa tortor, dignissim tincidunt est rhoncus eu. Maecenas elementum ligula et tempor scelerisque. Suspendisse tempor urna leo, et porta massa condimentum a. Phasellus vel facilisis nisl, vitae vestibulum erat. Proin eget pellentesque turpis. Vestibulum tortor mauris, fermentum at nisi ac, congue convallis metus. In tellus dolor, malesuada et tellus elementum, tristique hendrerit lacus. In sed bibendum sapien.
            </p>
            <p>
            Nam at enim in enim consectetur placerat sagittis non diam. Phasellus ornare ornare lorem accumsan pharetra. Fusce imperdiet auctor dui sit amet mattis. Nulla facilisi. Aliquam in ullamcorper odio. Integer mi mi, maximus in commodo ac, fringilla rutrum lectus. Fusce semper porta dolor, ornare luctus ligula sagittis at. Etiam tincidunt massa odio, vel tempor nisi lobortis ac. Integer ex felis, dictum finibus tempus a, aliquam a urna. Phasellus quis nisi tincidunt, pretium neque quis, pharetra nibh. Morbi malesuada fermentum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac orci ultricies, efficitur justo vitae, porttitor leo. Mauris eu tincidunt nisi.
            </p>
            <p>
            Praesent aliquam rutrum purus et aliquet. Integer molestie, eros vel laoreet finibus, velit nisi placerat enim, vitae maximus massa tellus nec est. Etiam in elit consequat, vehicula quam et, imperdiet felis. Sed quis justo viverra, pulvinar ipsum id, gravida lorem. Mauris at nisl egestas, pretium odio at, luctus nisl. Nulla sagittis, risus non aliquet hendrerit, dolor mauris viverra magna, eget iaculis ante ante in leo. Nunc scelerisque vel nisl sit amet venenatis. Cras pulvinar nibh tellus, vitae pharetra ligula pharetra non. Vivamus eleifend est vitae arcu rutrum, in vehicula felis ultrices.
            </p>
            <p>
            Sed at justo est. Phasellus efficitur purus eget bibendum accumsan. Sed condimentum tincidunt mi, iaculis molestie mauris laoreet eget. Nam eu mauris faucibus, posuere lectus et, fringilla metus. Phasellus tristique venenatis velit consequat pharetra. Pellentesque facilisis mauris id mi vulputate consequat. Curabitur quis ultrices urna, ac volutpat orci. Suspendisse et hendrerit lorem, vitae fermentum odio. Donec elementum purus a odio interdum placerat. Mauris dignissim risus sit amet justo volutpat fringilla. Etiam aliquet velit justo, eget consequat ipsum gravida sit amet.
            </p></div>`,
            blogId: 'zxcasd',
            datePublished: new Date(Date.now() - 608360000),
            dateModified: new Date(),
            imageSrc:'https://picsum.photos/500',
        }

        return [data, data, data, data, data, data];
    }

    static GetBlogDetails = async (blogId: string) => {

        console.log(blogId)
        return {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            content: `<div id="lipsum">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ex rhoncus, laoreet elit sit amet, dictum nisi. Suspendisse consectetur nec tellus vitae pellentesque. Nullam consectetur ligula vitae nisl aliquam, in dignissim nunc vestibulum. Vivamus facilisis in orci id blandit. Vestibulum a hendrerit ligula. Maecenas et dolor libero. Vivamus at dolor quam. Donec feugiat nisl vitae nisi ultrices porttitor. Vivamus in nulla pulvinar, tempor augue at, fermentum turpis. Quisque congue lorem at dolor pretium tincidunt.
            </p>
            <p>
            Fusce mollis enim elementum diam elementum, vitae mollis lacus aliquet. Quisque felis nulla, laoreet vel semper blandit, euismod ut sem. In molestie a tellus sed lacinia. Aenean porta diam augue, eget consectetur urna maximus at. Morbi pretium at justo et condimentum. Sed felis nisl, gravida non lorem ut, dapibus dictum purus. Nulla semper tellus at sapien congue, eu dictum orci condimentum. Sed tempus massa tortor, dignissim tincidunt est rhoncus eu. Maecenas elementum ligula et tempor scelerisque. Suspendisse tempor urna leo, et porta massa condimentum a. Phasellus vel facilisis nisl, vitae vestibulum erat. Proin eget pellentesque turpis. Vestibulum tortor mauris, fermentum at nisi ac, congue convallis metus. In tellus dolor, malesuada et tellus elementum, tristique hendrerit lacus. In sed bibendum sapien.
            </p>
            <p>
            Nam at enim in enim consectetur placerat sagittis non diam. Phasellus ornare ornare lorem accumsan pharetra. Fusce imperdiet auctor dui sit amet mattis. Nulla facilisi. Aliquam in ullamcorper odio. Integer mi mi, maximus in commodo ac, fringilla rutrum lectus. Fusce semper porta dolor, ornare luctus ligula sagittis at. Etiam tincidunt massa odio, vel tempor nisi lobortis ac. Integer ex felis, dictum finibus tempus a, aliquam a urna. Phasellus quis nisi tincidunt, pretium neque quis, pharetra nibh. Morbi malesuada fermentum aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac orci ultricies, efficitur justo vitae, porttitor leo. Mauris eu tincidunt nisi.
            </p>
            <p>
            Praesent aliquam rutrum purus et aliquet. Integer molestie, eros vel laoreet finibus, velit nisi placerat enim, vitae maximus massa tellus nec est. Etiam in elit consequat, vehicula quam et, imperdiet felis. Sed quis justo viverra, pulvinar ipsum id, gravida lorem. Mauris at nisl egestas, pretium odio at, luctus nisl. Nulla sagittis, risus non aliquet hendrerit, dolor mauris viverra magna, eget iaculis ante ante in leo. Nunc scelerisque vel nisl sit amet venenatis. Cras pulvinar nibh tellus, vitae pharetra ligula pharetra non. Vivamus eleifend est vitae arcu rutrum, in vehicula felis ultrices.
            </p>
            <p>
            Sed at justo est. Phasellus efficitur purus eget bibendum accumsan. Sed condimentum tincidunt mi, iaculis molestie mauris laoreet eget. Nam eu mauris faucibus, posuere lectus et, fringilla metus. Phasellus tristique venenatis velit consequat pharetra. Pellentesque facilisis mauris id mi vulputate consequat. Curabitur quis ultrices urna, ac volutpat orci. Suspendisse et hendrerit lorem, vitae fermentum odio. Donec elementum purus a odio interdum placerat. Mauris dignissim risus sit amet justo volutpat fringilla. Etiam aliquet velit justo, eget consequat ipsum gravida sit amet.
            </p></div>`,
            blogId: 'zxcasd',
            datePublished: new Date(Date.now() - 608360000),
            dateModified: new Date(),
            imageSrc:'https://picsum.photos/500',
        }
    }
}

export default BlogService;