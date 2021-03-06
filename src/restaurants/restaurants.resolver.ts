import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    return [];
  }
  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantDto: createRestaurantDto): boolean {
    console.log(createRestaurantDto);
    return true;
  }
}
