import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { UserInfo } from "./UserInfo";

@Resolver(UserInfo)
export class AuthResolver {
  @Query(() => UserInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async userInfo(@UserData() entityInfo: UserInfo): Promise<UserInfo> {
    return entityInfo;
  }
}
