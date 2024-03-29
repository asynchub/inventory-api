#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InventoryApiStack } from '../lib/inventory-api-stack';

const app = new cdk.App();
new InventoryApiStack(app, 'InventoryApiStack');
