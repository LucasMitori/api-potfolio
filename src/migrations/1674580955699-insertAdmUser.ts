import { MigrationInterface, QueryRunner } from "typeorm";

export class insertAdmUser1674580955699 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users(email, "password", bio, "name", "isAdm", image) VALUES ('lucas.mitori@hotmail.com', '$2y$10$7MLznW9nzeXHDe12pDyMgeRqMPJ90ZBHPQpr0VHHiMpcluBMgi6Ka', 'The wonders of Mura into the programming world, deeply down here, where it all true things lies.', 'Lucas Mitori Administrator', TRUE, 'https://portifolio-lucas-mitori-lucasmitori.vercel.app/static/media/admin.9cea132478160c4b5fd0.png');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users(email, "password", bio, "name", "isAdm", image) VALUES ('lucas.mitori@hotmail.com', '$2y$10$7MLznW9nzeXHDe12pDyMgeRqMPJ90ZBHPQpr0VHHiMpcluBMgi6Ka', 'The wonders of Mura into the programming world, deeply down here, where it all true things lies.', 'Lucas Mitori Administrator', TRUE, 'https://portifolio-lucas-mitori-lucasmitori.vercel.app/static/media/admin.9cea132478160c4b5fd0.png');`
    );
  }
}
