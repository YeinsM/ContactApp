using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ContactBackEnd.Data.Migrations
{
    public partial class newChangesPhone : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Contacts",
                newName: "Phone");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Contacts",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "Contacts",
                newName: "PhoneNumber");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Contacts",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
