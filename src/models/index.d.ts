import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerImages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Images, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyImages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Images, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Images = LazyLoading extends LazyLoadingDisabled ? EagerImages : LazyImages

export declare const Images: (new (init: ModelInit<Images>) => Images) & {
  copyOf(source: Images, mutator: (draft: MutableModel<Images>) => MutableModel<Images> | void): Images;
}