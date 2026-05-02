import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Product } from '@products/interfaces/product.interface';
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '@utils/form-utils';
import { FormErrorLabelComponent } from '@shared/components/form-error-label/form-error-label.component';
import { ProductsService } from '@products/services/products.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'product-details',
  imports: [
    ProductCarouselComponent,
    ReactiveFormsModule,
    FormErrorLabelComponent,
  ],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product = input.required<Product>();

  fb = inject(FormBuilder);
  productService = inject(ProductsService);
  router = inject(Router);

  wasSaved = signal(false);
  tempImages = signal<string[]>([]);
  productForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    slug: [
      '',
      [Validators.required, Validators.pattern(FormUtils.slugPattern)],
    ],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    sizes: [['']],
    images: [['']],
    tags: [''],
    gender: [
      'men',
      [Validators.required, Validators.pattern(/men|women|kid|unisex/)],
    ],
  });

  carouselImages = computed(() => {
    const carouselImages = [...this.product().images, ...this.tempImages()];

    console.log('carouselImages', carouselImages);

    return carouselImages;
  });

  sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  imageFileList: FileList | undefined = undefined;

  ngOnInit(): void {
    // this.productForm.reset(this.product() as any);
    this.setFormValues(this.product());
  }

  setFormValues(formLike: Partial<Product>) {
    this.productForm.patchValue(formLike as any);
    this.productForm.patchValue({ tags: formLike.tags?.join(', ') ?? '' });
  }

  async onSubmit() {
    this.productForm.markAllAsTouched();
    if (this.productForm.invalid) return;

    const formValues = this.productForm.value;
    const productLike: Partial<Product> = {
      ...(formValues as any),
      tags:
        formValues.tags
          ?.toLowerCase()
          .split(',')
          .map((tag: string) => tag.trim()) ?? [],
    };
    if (this.product().id === 'new') {
      const product = await firstValueFrom(
        this.productService.createProduct(productLike, this.imageFileList),
      );

      this.router.navigate(['/admin/product', product.id]);
    } else {
      await firstValueFrom(
        this.productService.updateProduct(
          this.product().id,
          productLike,
          this.imageFileList,
        ),
      );
    }

    this.wasSaved.set(true);

    setTimeout(() => {
      this.wasSaved.set(false);
    }, 2000);
  }

  onSizeChange(size: string) {
    const currentSizes = this.productForm.get('sizes')?.value ?? [];

    if (currentSizes.includes(size)) {
      currentSizes.splice(currentSizes.indexOf(size), 1);
    } else {
      currentSizes.push(size);
    }

    this.productForm.patchValue({ sizes: currentSizes });
  }

  onFilesChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    this.imageFileList = files ?? undefined;
    this.tempImages.set([]);

    const imageUrl = Array.from(files ?? []).map((file) =>
      URL.createObjectURL(file),
    );

    this.tempImages.set(imageUrl);
  }
}
