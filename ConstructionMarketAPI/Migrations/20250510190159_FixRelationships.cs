using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ConstructionMarketAPI.Migrations
{
    /// <inheritdoc />
    public partial class FixRelationships : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_ProfessionalServices_ProfessionalServiceId1",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Users_UserId1",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_ProfessionalServices_Professionals_ProfessionalId1",
                table: "ProfessionalServices");

            migrationBuilder.DropForeignKey(
                name: "FK_ProfessionalServices_Services_ServiceId1",
                table: "ProfessionalServices");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Professionals_ProfessionalId1",
                table: "Reviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Users_UserId1",
                table: "Reviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Services_Categories_CategoryId1",
                table: "Services");

            migrationBuilder.DropIndex(
                name: "IX_ProfessionalServices_ProfessionalId1",
                table: "ProfessionalServices");

            migrationBuilder.DropIndex(
                name: "IX_ProfessionalServices_ServiceId1",
                table: "ProfessionalServices");

            migrationBuilder.DropIndex(
                name: "IX_Bookings_ProfessionalServiceId1",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "ProfessionalId1",
                table: "ProfessionalServices");

            migrationBuilder.DropColumn(
                name: "ServiceId1",
                table: "ProfessionalServices");

            migrationBuilder.DropColumn(
                name: "ProfessionalServiceId1",
                table: "Bookings");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId1",
                table: "Services",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "UserId1",
                table: "Reviews",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ProfessionalId1",
                table: "Reviews",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Professionals",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "ProfessionalServices",
                type: "decimal(10,2)",
                precision: 10,
                scale: 2,
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(18,2)");

            migrationBuilder.AlterColumn<int>(
                name: "UserId1",
                table: "Bookings",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Users_UserId1",
                table: "Bookings",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Professionals_ProfessionalId1",
                table: "Reviews",
                column: "ProfessionalId1",
                principalTable: "Professionals",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Users_UserId1",
                table: "Reviews",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Services_Categories_CategoryId1",
                table: "Services",
                column: "CategoryId1",
                principalTable: "Categories",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_Users_UserId1",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Professionals_ProfessionalId1",
                table: "Reviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Users_UserId1",
                table: "Reviews");

            migrationBuilder.DropForeignKey(
                name: "FK_Services_Categories_CategoryId1",
                table: "Services");

            migrationBuilder.AlterColumn<int>(
                name: "CategoryId1",
                table: "Services",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId1",
                table: "Reviews",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ProfessionalId1",
                table: "Reviews",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Professionals",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<decimal>(
                name: "Price",
                table: "ProfessionalServices",
                type: "decimal(18,2)",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10,2)",
                oldPrecision: 10,
                oldScale: 2);

            migrationBuilder.AddColumn<int>(
                name: "ProfessionalId1",
                table: "ProfessionalServices",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ServiceId1",
                table: "ProfessionalServices",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "UserId1",
                table: "Bookings",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProfessionalServiceId1",
                table: "Bookings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_ProfessionalServices_ProfessionalId1",
                table: "ProfessionalServices",
                column: "ProfessionalId1");

            migrationBuilder.CreateIndex(
                name: "IX_ProfessionalServices_ServiceId1",
                table: "ProfessionalServices",
                column: "ServiceId1");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_ProfessionalServiceId1",
                table: "Bookings",
                column: "ProfessionalServiceId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_ProfessionalServices_ProfessionalServiceId1",
                table: "Bookings",
                column: "ProfessionalServiceId1",
                principalTable: "ProfessionalServices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_Users_UserId1",
                table: "Bookings",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProfessionalServices_Professionals_ProfessionalId1",
                table: "ProfessionalServices",
                column: "ProfessionalId1",
                principalTable: "Professionals",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProfessionalServices_Services_ServiceId1",
                table: "ProfessionalServices",
                column: "ServiceId1",
                principalTable: "Services",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Professionals_ProfessionalId1",
                table: "Reviews",
                column: "ProfessionalId1",
                principalTable: "Professionals",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Users_UserId1",
                table: "Reviews",
                column: "UserId1",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Services_Categories_CategoryId1",
                table: "Services",
                column: "CategoryId1",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
